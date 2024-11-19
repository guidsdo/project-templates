import {
    CancellationToken,
    ConnectionOptions,
    createProtocolConnection,
    Disposable,
    ExitNotification,
    GenericNotificationHandler,
    GenericRequestHandler,
    InitializeParams,
    InitializeRequest,
    InitializeResult,
    Logger,
    Message,
    MessageReader,
    MessageSignature,
    MessageWriter,
    NotificationHandler,
    NotificationHandler0,
    NotificationType,
    NotificationType0,
    ProgressType,
    ProtocolNotificationType,
    ProtocolNotificationType0,
    ProtocolRequestType,
    ProtocolRequestType0,
    RAL,
    RequestHandler,
    RequestHandler0,
    RequestType,
    RequestType0,
    ShutdownRequest,
    Trace,
    TraceFormat,
    TraceOptions,
    Tracer
} from "vscode-languageserver-protocol/browser";
import * as Is from "../is";

// Source: https://github.com/microsoft/vscode-languageserver-node/blob/8e6bf18f22b2e83b60a27a51447b99acf98c4381/client/src/common/client.ts
// The actual client needs all sorts of vscode specific services, so this is the barebones one without these dependencies

export function createLspClientConnection(
    input: MessageReader,
    output: MessageWriter,
    errorHandler: ConnectionErrorHandler,
    closeHandler: ConnectionCloseHandler,
    options?: ConnectionOptions
): LspClientConnection {
    const logger = new ConsoleLogger();
    const connection = createProtocolConnection(input, output, logger, options);
    connection.onError(data => errorHandler(data[0], data[1], data[2]));
    connection.onClose(closeHandler);

    const result: LspClientConnection = {
        listen: (): void => connection.listen(),

        sendRequest: connection.sendRequest,

        onRequest: connection.onRequest,

        hasPendingResponse: connection.hasPendingResponse,

        sendNotification: connection.sendNotification,

        onNotification: connection.onNotification,

        onProgress: connection.onProgress,
        sendProgress: connection.sendProgress,

        trace: (value: Trace, tracer: Tracer, sendNotificationOrTraceOptions?: boolean | TraceOptions): Promise<void> => {
            const defaultTraceOptions: TraceOptions = {
                sendNotification: false,
                traceFormat: TraceFormat.Text
            };

            if (sendNotificationOrTraceOptions === undefined) {
                return connection.trace(value, tracer, defaultTraceOptions);
            } else if (Is.boolean(sendNotificationOrTraceOptions)) {
                return connection.trace(value, tracer, sendNotificationOrTraceOptions);
            } else {
                return connection.trace(value, tracer, sendNotificationOrTraceOptions);
            }
        },

        initialize: (params: InitializeParams) => {
            // This needs to return and MUST not be await to avoid any async
            // scheduling. Otherwise messages might overtake each other.
            return connection.sendRequest(InitializeRequest.type, params);
        },
        shutdown: () => {
            // This needs to return and MUST not be await to avoid any async
            // scheduling. Otherwise messages might overtake each other.
            return connection.sendRequest(ShutdownRequest.type, undefined);
        },
        exit: () => {
            // This needs to return and MUST not be await to avoid any async
            // scheduling. Otherwise messages might overtake each other.
            return connection.sendNotification(ExitNotification.type);
        },

        end: () => connection.end(),
        dispose: () => connection.dispose()
    };

    return result;
}

export interface LspClientConnection {
    listen(): void;

    sendRequest<R, PR, E, RO>(type: ProtocolRequestType0<R, PR, E, RO>, token?: CancellationToken): Promise<R>;
    sendRequest<P, R, PR, E, RO>(type: ProtocolRequestType<P, R, PR, E, RO>, params: P, token?: CancellationToken): Promise<R>;
    sendRequest<R, E>(type: RequestType0<R, E>, token?: CancellationToken): Promise<R>;
    sendRequest<P, R, E>(type: RequestType<P, R, E>, params: P, token?: CancellationToken): Promise<R>;
    sendRequest<R>(type: string | MessageSignature, ...params: any[]): Promise<R>;

    onRequest<R, PR, E, RO>(type: ProtocolRequestType0<R, PR, E, RO>, handler: RequestHandler0<R, E>): Disposable;
    onRequest<P, R, PR, E, RO>(type: ProtocolRequestType<P, R, PR, E, RO>, handler: RequestHandler<P, R, E>): Disposable;
    onRequest<R, E>(type: RequestType0<R, E>, handler: RequestHandler0<R, E>): Disposable;
    onRequest<P, R, E>(type: RequestType<P, R, E>, handler: RequestHandler<P, R, E>): Disposable;
    onRequest<R, E>(method: string | MessageSignature, handler: GenericRequestHandler<R, E>): Disposable;

    hasPendingResponse(): boolean;

    sendNotification<RO>(type: ProtocolNotificationType0<RO>): Promise<void>;
    sendNotification<P, RO>(type: ProtocolNotificationType<P, RO>, params?: P): Promise<void>;
    sendNotification(type: NotificationType0): Promise<void>;
    sendNotification<P>(type: NotificationType<P>, params?: P): Promise<void>;
    sendNotification(method: string | MessageSignature, params?: any): Promise<void>;

    onNotification<RO>(type: ProtocolNotificationType0<RO>, handler: NotificationHandler0): Disposable;
    onNotification<P, RO>(type: ProtocolNotificationType<P, RO>, handler: NotificationHandler<P>): Disposable;
    onNotification(type: NotificationType0, handler: NotificationHandler0): Disposable;
    onNotification<P>(type: NotificationType<P>, handler: NotificationHandler<P>): Disposable;
    onNotification(method: string | MessageSignature, handler: GenericNotificationHandler): Disposable;

    onProgress<P>(type: ProgressType<P>, token: string | number, handler: NotificationHandler<P>): Disposable;
    sendProgress<P>(type: ProgressType<P>, token: string | number, value: P): Promise<void>;

    trace(value: Trace, tracer: Tracer, sendNotification?: boolean): Promise<void>;
    trace(value: Trace, tracer: Tracer, traceOptions?: TraceOptions): Promise<void>;

    initialize(params: InitializeParams): Promise<InitializeResult>;
    shutdown(): Promise<void>;
    exit(): Promise<void>;

    end(): void;
    dispose(): void;
}

class ConsoleLogger implements Logger {
    public error(message: string): void {
        RAL().console.error(message);
    }
    public warn(message: string): void {
        RAL().console.warn(message);
    }
    public info(message: string): void {
        RAL().console.info(message);
    }
    public log(message: string): void {
        RAL().console.log(message);
    }
}

type ConnectionErrorHandler = {
    (error: Error, message: Message | undefined, count: number | undefined): void;
};

interface ConnectionCloseHandler {
    (): void;
}

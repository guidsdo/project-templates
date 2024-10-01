// SQL.g4
grammar SQL;

// Lexer rules
SELECT: 'SELECT';
FROM: 'FROM';
WHERE: 'WHERE';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;

// Parser rules
query: SELECT columns FROM table (WHERE condition)?;
columns: IDENTIFIER (',' IDENTIFIER)*;
table: IDENTIFIER;
condition: IDENTIFIER '=' IDENTIFIER;

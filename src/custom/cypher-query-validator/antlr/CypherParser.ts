// Generated from Cypher.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CypherListener from "./CypherListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CypherParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly CYPHER = 55;
	public static readonly EXPLAIN = 56;
	public static readonly PROFILE = 57;
	public static readonly USING = 58;
	public static readonly PERIODIC = 59;
	public static readonly COMMIT = 60;
	public static readonly UNION = 61;
	public static readonly ALL = 62;
	public static readonly CREATE = 63;
	public static readonly DROP = 64;
	public static readonly INDEX = 65;
	public static readonly ON = 66;
	public static readonly CONSTRAINT = 67;
	public static readonly ASSERT = 68;
	public static readonly IS = 69;
	public static readonly UNIQUE = 70;
	public static readonly EXISTS = 71;
	public static readonly LOAD = 72;
	public static readonly CSV = 73;
	public static readonly WITH = 74;
	public static readonly HEADERS = 75;
	public static readonly FROM = 76;
	public static readonly AS = 77;
	public static readonly FIELDTERMINATOR = 78;
	public static readonly OPTIONAL = 79;
	public static readonly MATCH = 80;
	public static readonly UNWIND = 81;
	public static readonly MERGE = 82;
	public static readonly SET = 83;
	public static readonly DETACH = 84;
	public static readonly DELETE = 85;
	public static readonly REMOVE = 86;
	public static readonly FOREACH = 87;
	public static readonly IN = 88;
	public static readonly DISTINCT = 89;
	public static readonly RETURN = 90;
	public static readonly ORDER = 91;
	public static readonly BY = 92;
	public static readonly L_SKIP = 93;
	public static readonly LIMIT = 94;
	public static readonly ASCENDING = 95;
	public static readonly ASC = 96;
	public static readonly DESCENDING = 97;
	public static readonly DESC = 98;
	public static readonly JOIN = 99;
	public static readonly SCAN = 100;
	public static readonly START = 101;
	public static readonly NODE = 102;
	public static readonly RELATIONSHIP = 103;
	public static readonly REL = 104;
	public static readonly WHERE = 105;
	public static readonly SHORTESTPATH = 106;
	public static readonly ALLSHORTESTPATHS = 107;
	public static readonly OR = 108;
	public static readonly XOR = 109;
	public static readonly AND = 110;
	public static readonly NOT = 111;
	public static readonly STARTS = 112;
	public static readonly ENDS = 113;
	public static readonly CONTAINS = 114;
	public static readonly NULL = 115;
	public static readonly COUNT = 116;
	public static readonly FILTER = 117;
	public static readonly EXTRACT = 118;
	public static readonly ANY = 119;
	public static readonly NONE = 120;
	public static readonly SINGLE = 121;
	public static readonly TRUE = 122;
	public static readonly FALSE = 123;
	public static readonly REDUCE = 124;
	public static readonly CASE = 125;
	public static readonly ELSE = 126;
	public static readonly END = 127;
	public static readonly WHEN = 128;
	public static readonly THEN = 129;
	public static readonly CALL = 130;
	public static readonly YIELD = 131;
	public static readonly KEY = 132;
	public static readonly CATALOG = 133;
	public static readonly SHOW = 134;
	public static readonly DEFAULT = 135;
	public static readonly DBMS = 136;
	public static readonly DATABASE = 137;
	public static readonly DATABASES = 138;
	public static readonly GRAPH = 139;
	public static readonly GRAPHS = 140;
	public static readonly REPLACE = 141;
	public static readonly IF = 142;
	public static readonly STOP = 143;
	public static readonly ROLE = 144;
	public static readonly ROLES = 145;
	public static readonly USER = 146;
	public static readonly USERS = 147;
	public static readonly POPULATED = 148;
	public static readonly PASSWORD = 149;
	public static readonly CHANGE = 150;
	public static readonly REQUIRED = 151;
	public static readonly STATUS = 152;
	public static readonly ACTIVE = 153;
	public static readonly SUSPENDED = 154;
	public static readonly ALTER = 155;
	public static readonly CURRENT = 156;
	public static readonly TO = 157;
	public static readonly PRIVILEGES = 158;
	public static readonly GRANT = 159;
	public static readonly DENY = 160;
	public static readonly REVOKE = 161;
	public static readonly RELATIONSHIPS = 162;
	public static readonly NODES = 163;
	public static readonly ELEMENT = 164;
	public static readonly ELEMENTS = 165;
	public static readonly COPY = 166;
	public static readonly OF = 167;
	public static readonly TRAVERSE = 168;
	public static readonly READ = 169;
	public static readonly WRITE = 170;
	public static readonly ACCESS = 171;
	public static readonly INDEXES = 172;
	public static readonly MANAGEMENT = 173;
	public static readonly NEW = 174;
	public static readonly LABEL = 175;
	public static readonly LABELS = 176;
	public static readonly NAME = 177;
	public static readonly NAMES = 178;
	public static readonly TYPE = 179;
	public static readonly TYPES = 180;
	public static readonly PROPERTY = 181;
	public static readonly CONSTRAINTS = 182;
	public static readonly ASSIGN = 183;
	public static readonly BTREE = 184;
	public static readonly EXIST = 185;
	public static readonly FOR = 186;
	public static readonly OPTIONS = 187;
	public static readonly EXECUTE = 188;
	public static readonly DEFINED = 189;
	public static readonly FUNCTION = 190;
	public static readonly FUNCTIONS = 191;
	public static readonly BOOSTED = 192;
	public static readonly PROCEDURE = 193;
	public static readonly PROCEDURES = 194;
	public static readonly ADMIN = 195;
	public static readonly ADMINISTRATOR = 196;
	public static readonly BRIEF = 197;
	public static readonly VERBOSE = 198;
	public static readonly OUTPUT = 199;
	public static readonly StringLiteral = 200;
	public static readonly UrlHex = 201;
	public static readonly EscapedChar = 202;
	public static readonly HexInteger = 203;
	public static readonly DecimalInteger = 204;
	public static readonly OctalInteger = 205;
	public static readonly HexLetter = 206;
	public static readonly HexDigit = 207;
	public static readonly Digit = 208;
	public static readonly NonZeroDigit = 209;
	public static readonly NonZeroOctDigit = 210;
	public static readonly OctDigit = 211;
	public static readonly ZeroDigit = 212;
	public static readonly ExponentDecimalReal = 213;
	public static readonly RegularDecimalReal = 214;
	public static readonly UnescapedSymbolicName = 215;
	public static readonly IdentifierStart = 216;
	public static readonly IdentifierPart = 217;
	public static readonly EscapedSymbolicName = 218;
	public static readonly SP = 219;
	public static readonly WHITESPACE = 220;
	public static readonly Comment = 221;
	public static readonly ERROR_TOKEN = 222;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_cypher = 0;
	public static readonly RULE_cypherPart = 1;
	public static readonly RULE_cypherConsoleCommand = 2;
	public static readonly RULE_cypherConsoleCommandName = 3;
	public static readonly RULE_cypherConsoleCommandParameters = 4;
	public static readonly RULE_cypherConsoleCommandParameter = 5;
	public static readonly RULE_arrowExpression = 6;
	public static readonly RULE_url = 7;
	public static readonly RULE_uri = 8;
	public static readonly RULE_scheme = 9;
	public static readonly RULE_host = 10;
	public static readonly RULE_hostname = 11;
	public static readonly RULE_hostnumber = 12;
	public static readonly RULE_port = 13;
	public static readonly RULE_path = 14;
	public static readonly RULE_user = 15;
	public static readonly RULE_login = 16;
	public static readonly RULE_password = 17;
	public static readonly RULE_frag = 18;
	public static readonly RULE_urlQuery = 19;
	public static readonly RULE_search = 20;
	public static readonly RULE_searchparameter = 21;
	public static readonly RULE_string = 22;
	public static readonly RULE_urlDigits = 23;
	public static readonly RULE_json = 24;
	public static readonly RULE_obj = 25;
	public static readonly RULE_pair = 26;
	public static readonly RULE_array = 27;
	public static readonly RULE_value = 28;
	public static readonly RULE_keyValueLiteral = 29;
	public static readonly RULE_commandPath = 30;
	public static readonly RULE_subCommand = 31;
	public static readonly RULE_cypherQuery = 32;
	public static readonly RULE_queryOptions = 33;
	public static readonly RULE_anyCypherOption = 34;
	public static readonly RULE_cypherOption = 35;
	public static readonly RULE_versionNumber = 36;
	public static readonly RULE_explain = 37;
	public static readonly RULE_profile = 38;
	public static readonly RULE_configurationOption = 39;
	public static readonly RULE_statement = 40;
	public static readonly RULE_query = 41;
	public static readonly RULE_regularQuery = 42;
	public static readonly RULE_bulkImportQuery = 43;
	public static readonly RULE_singleQuery = 44;
	public static readonly RULE_periodicCommitHint = 45;
	public static readonly RULE_loadCSVQuery = 46;
	public static readonly RULE_union = 47;
	public static readonly RULE_clause = 48;
	public static readonly RULE_command = 49;
	public static readonly RULE_systemCommand = 50;
	public static readonly RULE_multidatabaseCommand = 51;
	public static readonly RULE_userCommand = 52;
	public static readonly RULE_privilegeCommand = 53;
	public static readonly RULE_showRoles = 54;
	public static readonly RULE_createRole = 55;
	public static readonly RULE_copyRole = 56;
	public static readonly RULE_dropRole = 57;
	public static readonly RULE_showUsers = 58;
	public static readonly RULE_createUser = 59;
	public static readonly RULE_dropUser = 60;
	public static readonly RULE_alterUser = 61;
	public static readonly RULE_showPrivileges = 62;
	public static readonly RULE_grantPrivilege = 63;
	public static readonly RULE_denyPrivilege = 64;
	public static readonly RULE_revokePrivilege = 65;
	public static readonly RULE_revokePart = 66;
	public static readonly RULE_databaseScope = 67;
	public static readonly RULE_graphScope = 68;
	public static readonly RULE_roles = 69;
	public static readonly RULE_grantableGraphPrivileges = 70;
	public static readonly RULE_revokeableGraphPrivileges = 71;
	public static readonly RULE_datasbasePrivilege = 72;
	public static readonly RULE_dbmsPrivilege = 73;
	public static readonly RULE_elementScope = 74;
	public static readonly RULE_propertiesList = 75;
	public static readonly RULE_propertyScope = 76;
	public static readonly RULE_showDatabase = 77;
	public static readonly RULE_createDatabase = 78;
	public static readonly RULE_dropDatabase = 79;
	public static readonly RULE_startDatabase = 80;
	public static readonly RULE_stopDatabase = 81;
	public static readonly RULE_ifNotExists = 82;
	public static readonly RULE_ifExists = 83;
	public static readonly RULE_orReplace = 84;
	public static readonly RULE_setPassword = 85;
	public static readonly RULE_passwordStatus = 86;
	public static readonly RULE_setStatus = 87;
	public static readonly RULE_userStatus = 88;
	public static readonly RULE_createUniqueConstraint = 89;
	public static readonly RULE_createNodeKeyConstraint = 90;
	public static readonly RULE_createNodePropertyExistenceConstraint = 91;
	public static readonly RULE_createRelationshipPropertyExistenceConstraint = 92;
	public static readonly RULE_createIndex = 93;
	public static readonly RULE_dropUniqueConstraint = 94;
	public static readonly RULE_dropNodeKeyConstraint = 95;
	public static readonly RULE_dropNodePropertyExistenceConstraint = 96;
	public static readonly RULE_dropRelationshipPropertyExistenceConstraint = 97;
	public static readonly RULE_dropIndex = 98;
	public static readonly RULE_index = 99;
	public static readonly RULE_uniqueConstraint = 100;
	public static readonly RULE_nodeKeyConstraint = 101;
	public static readonly RULE_nodePropertyExistenceConstraint = 102;
	public static readonly RULE_relationshipPropertyExistenceConstraint = 103;
	public static readonly RULE_relationshipPatternSyntax = 104;
	public static readonly RULE_loadCSVClause = 105;
	public static readonly RULE_matchClause = 106;
	public static readonly RULE_unwindClause = 107;
	public static readonly RULE_mergeClause = 108;
	public static readonly RULE_mergeAction = 109;
	public static readonly RULE_createClause = 110;
	public static readonly RULE_createUniqueClause = 111;
	public static readonly RULE_setClause = 112;
	public static readonly RULE_setItem = 113;
	public static readonly RULE_deleteClause = 114;
	public static readonly RULE_removeClause = 115;
	public static readonly RULE_removeItem = 116;
	public static readonly RULE_foreachClause = 117;
	public static readonly RULE_withClause = 118;
	public static readonly RULE_returnClause = 119;
	public static readonly RULE_returnBody = 120;
	public static readonly RULE_func = 121;
	public static readonly RULE_returnItems = 122;
	public static readonly RULE_returnItem = 123;
	public static readonly RULE_asMapping = 124;
	public static readonly RULE_call = 125;
	public static readonly RULE_subqueryClause = 126;
	public static readonly RULE_subquery = 127;
	public static readonly RULE_procedureInvocation = 128;
	public static readonly RULE_procedureInvocationBody = 129;
	public static readonly RULE_procedureArguments = 130;
	public static readonly RULE_procedureResults = 131;
	public static readonly RULE_procedureResult = 132;
	public static readonly RULE_aliasedProcedureResult = 133;
	public static readonly RULE_simpleProcedureResult = 134;
	public static readonly RULE_procedureOutput = 135;
	public static readonly RULE_order = 136;
	public static readonly RULE_skip = 137;
	public static readonly RULE_limit = 138;
	public static readonly RULE_sortItem = 139;
	public static readonly RULE_hint = 140;
	public static readonly RULE_startClause = 141;
	public static readonly RULE_startPoint = 142;
	public static readonly RULE_lookup = 143;
	public static readonly RULE_nodeLookup = 144;
	public static readonly RULE_relationshipLookup = 145;
	public static readonly RULE_identifiedIndexLookup = 146;
	public static readonly RULE_indexQuery = 147;
	public static readonly RULE_idLookup = 148;
	public static readonly RULE_literalIds = 149;
	public static readonly RULE_where = 150;
	public static readonly RULE_pattern = 151;
	public static readonly RULE_patternPart = 152;
	public static readonly RULE_anonymousPatternPart = 153;
	public static readonly RULE_patternElement = 154;
	public static readonly RULE_nodePattern = 155;
	public static readonly RULE_patternElementChain = 156;
	public static readonly RULE_relationshipPattern = 157;
	public static readonly RULE_relationshipPatternStart = 158;
	public static readonly RULE_relationshipPatternEnd = 159;
	public static readonly RULE_relationshipDetail = 160;
	public static readonly RULE_properties = 161;
	public static readonly RULE_relType = 162;
	public static readonly RULE_relationshipTypeTermAtom = 163;
	public static readonly RULE_relationshipTypeTerm = 164;
	public static readonly RULE_wildcardRelationshipType = 165;
	public static readonly RULE_orRelationshipTypeTerm = 166;
	public static readonly RULE_andRelationshipTypeTerm = 167;
	public static readonly RULE_notRelationshipTypeTerm = 168;
	public static readonly RULE_parenthesizedRelationshipTypeTerm = 169;
	public static readonly RULE_relationshipTypes = 170;
	public static readonly RULE_relationshipType = 171;
	public static readonly RULE_inversionToken = 172;
	public static readonly RULE_relationshipTypeOptionalColon = 173;
	public static readonly RULE_nodeLabels = 174;
	public static readonly RULE_nodeLabel = 175;
	public static readonly RULE_labelAtom = 176;
	public static readonly RULE_labelTerm = 177;
	public static readonly RULE_wildcardLabel = 178;
	public static readonly RULE_orLabelTerm = 179;
	public static readonly RULE_andLabelTerm = 180;
	public static readonly RULE_notLabelTerm = 181;
	public static readonly RULE_parenthesizedLabelTerm = 182;
	public static readonly RULE_rangeLiteral = 183;
	public static readonly RULE_labelName = 184;
	public static readonly RULE_relTypeName = 185;
	public static readonly RULE_expression = 186;
	public static readonly RULE_existsSubQuery = 187;
	public static readonly RULE_existsSubQueryBody = 188;
	public static readonly RULE_subqueryPatternBody = 189;
	public static readonly RULE_orExpression = 190;
	public static readonly RULE_xorExpression = 191;
	public static readonly RULE_andExpression = 192;
	public static readonly RULE_notExpression = 193;
	public static readonly RULE_comparisonExpression = 194;
	public static readonly RULE_addOrSubtractExpression = 195;
	public static readonly RULE_multiplyDivideModuloExpression = 196;
	public static readonly RULE_powerOfExpression = 197;
	public static readonly RULE_unaryAddOrSubtractExpression = 198;
	public static readonly RULE_stringListNullOperatorExpression = 199;
	public static readonly RULE_propertyOrLabelsExpression = 200;
	public static readonly RULE_filterFunction = 201;
	public static readonly RULE_filterFunctionName = 202;
	public static readonly RULE_existsFunction = 203;
	public static readonly RULE_existsFunctionName = 204;
	public static readonly RULE_allFunction = 205;
	public static readonly RULE_allFunctionName = 206;
	public static readonly RULE_anyFunction = 207;
	public static readonly RULE_anyFunctionName = 208;
	public static readonly RULE_noneFunction = 209;
	public static readonly RULE_noneFunctionName = 210;
	public static readonly RULE_singleFunction = 211;
	public static readonly RULE_singleFunctionName = 212;
	public static readonly RULE_extractFunction = 213;
	public static readonly RULE_extractFunctionName = 214;
	public static readonly RULE_reduceFunction = 215;
	public static readonly RULE_reduceFunctionName = 216;
	public static readonly RULE_shortestPathPatternFunction = 217;
	public static readonly RULE_shortestPathFunctionName = 218;
	public static readonly RULE_allShortestPathFunctionName = 219;
	public static readonly RULE_atom = 220;
	public static readonly RULE_literal = 221;
	public static readonly RULE_stringLiteral = 222;
	public static readonly RULE_booleanLiteral = 223;
	public static readonly RULE_listLiteral = 224;
	public static readonly RULE_partialComparisonExpression = 225;
	public static readonly RULE_parenthesizedExpression = 226;
	public static readonly RULE_relationshipsPattern = 227;
	public static readonly RULE_filterExpression = 228;
	public static readonly RULE_idInColl = 229;
	public static readonly RULE_functionInvocation = 230;
	public static readonly RULE_functionInvocationBody = 231;
	public static readonly RULE_functionName = 232;
	public static readonly RULE_procedureName = 233;
	public static readonly RULE_listComprehension = 234;
	public static readonly RULE_patternComprehension = 235;
	public static readonly RULE_propertyLookup = 236;
	public static readonly RULE_caseExpression = 237;
	public static readonly RULE_caseAlternatives = 238;
	public static readonly RULE_variable = 239;
	public static readonly RULE_numberLiteral = 240;
	public static readonly RULE_mapLiteral = 241;
	public static readonly RULE_mapProjection = 242;
	public static readonly RULE_mapProjectionVariants = 243;
	public static readonly RULE_literalEntry = 244;
	public static readonly RULE_propertySelector = 245;
	public static readonly RULE_variableSelector = 246;
	public static readonly RULE_allPropertiesSelector = 247;
	public static readonly RULE_parameter = 248;
	public static readonly RULE_legacyParameter = 249;
	public static readonly RULE_newParameter = 250;
	public static readonly RULE_parameterName = 251;
	public static readonly RULE_propertyExpressions = 252;
	public static readonly RULE_propertyExpression = 253;
	public static readonly RULE_propertyKeys = 254;
	public static readonly RULE_propertyKeyName = 255;
	public static readonly RULE_integerLiteral = 256;
	public static readonly RULE_doubleLiteral = 257;
	public static readonly RULE_namespace = 258;
	public static readonly RULE_leftArrowHead = 259;
	public static readonly RULE_rightArrowHead = 260;
	public static readonly RULE_dash = 261;
	public static readonly RULE_symbolicName = 262;
	public static readonly RULE_keyword = 263;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "':'", "'-'", 
                                                            "'=>'", "'://'", 
                                                            "'/'", "'.'", 
                                                            "'@'", "'#'", 
                                                            "'?'", "'&'", 
                                                            "'='", "'+'", 
                                                            "'{'", "','", 
                                                            "'}'", "'['", 
                                                            "']'", "'*'", 
                                                            "'('", "')'", 
                                                            "'+='", "'|'", 
                                                            "'%'", "'!'", 
                                                            "'..'", "'^'", 
                                                            "'=~'", "'<>'", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'$'", 
                                                            "'\\u27E8'", 
                                                            "'\\u3008'", 
                                                            "'\\uFE64'", 
                                                            "'\\uFF1C'", 
                                                            "'\\u27E9'", 
                                                            "'\\u3009'", 
                                                            "'\\uFE65'", 
                                                            "'\\uFF1E'", 
                                                            "'\\u00AD'", 
                                                            "'\\u2010'", 
                                                            "'\\u2011'", 
                                                            "'\\u2012'", 
                                                            "'\\u2013'", 
                                                            "'\\u2014'", 
                                                            "'\\u2015'", 
                                                            "'\\u2212'", 
                                                            "'\\uFE58'", 
                                                            "'\\uFE63'", 
                                                            "'\\uFF0D'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'0'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "CYPHER", 
                                                             "EXPLAIN", 
                                                             "PROFILE", 
                                                             "USING", "PERIODIC", 
                                                             "COMMIT", "UNION", 
                                                             "ALL", "CREATE", 
                                                             "DROP", "INDEX", 
                                                             "ON", "CONSTRAINT", 
                                                             "ASSERT", "IS", 
                                                             "UNIQUE", "EXISTS", 
                                                             "LOAD", "CSV", 
                                                             "WITH", "HEADERS", 
                                                             "FROM", "AS", 
                                                             "FIELDTERMINATOR", 
                                                             "OPTIONAL", 
                                                             "MATCH", "UNWIND", 
                                                             "MERGE", "SET", 
                                                             "DETACH", "DELETE", 
                                                             "REMOVE", "FOREACH", 
                                                             "IN", "DISTINCT", 
                                                             "RETURN", "ORDER", 
                                                             "BY", "L_SKIP", 
                                                             "LIMIT", "ASCENDING", 
                                                             "ASC", "DESCENDING", 
                                                             "DESC", "JOIN", 
                                                             "SCAN", "START", 
                                                             "NODE", "RELATIONSHIP", 
                                                             "REL", "WHERE", 
                                                             "SHORTESTPATH", 
                                                             "ALLSHORTESTPATHS", 
                                                             "OR", "XOR", 
                                                             "AND", "NOT", 
                                                             "STARTS", "ENDS", 
                                                             "CONTAINS", 
                                                             "NULL", "COUNT", 
                                                             "FILTER", "EXTRACT", 
                                                             "ANY", "NONE", 
                                                             "SINGLE", "TRUE", 
                                                             "FALSE", "REDUCE", 
                                                             "CASE", "ELSE", 
                                                             "END", "WHEN", 
                                                             "THEN", "CALL", 
                                                             "YIELD", "KEY", 
                                                             "CATALOG", 
                                                             "SHOW", "DEFAULT", 
                                                             "DBMS", "DATABASE", 
                                                             "DATABASES", 
                                                             "GRAPH", "GRAPHS", 
                                                             "REPLACE", 
                                                             "IF", "STOP", 
                                                             "ROLE", "ROLES", 
                                                             "USER", "USERS", 
                                                             "POPULATED", 
                                                             "PASSWORD", 
                                                             "CHANGE", "REQUIRED", 
                                                             "STATUS", "ACTIVE", 
                                                             "SUSPENDED", 
                                                             "ALTER", "CURRENT", 
                                                             "TO", "PRIVILEGES", 
                                                             "GRANT", "DENY", 
                                                             "REVOKE", "RELATIONSHIPS", 
                                                             "NODES", "ELEMENT", 
                                                             "ELEMENTS", 
                                                             "COPY", "OF", 
                                                             "TRAVERSE", 
                                                             "READ", "WRITE", 
                                                             "ACCESS", "INDEXES", 
                                                             "MANAGEMENT", 
                                                             "NEW", "LABEL", 
                                                             "LABELS", "NAME", 
                                                             "NAMES", "TYPE", 
                                                             "TYPES", "PROPERTY", 
                                                             "CONSTRAINTS", 
                                                             "ASSIGN", "BTREE", 
                                                             "EXIST", "FOR", 
                                                             "OPTIONS", 
                                                             "EXECUTE", 
                                                             "DEFINED", 
                                                             "FUNCTION", 
                                                             "FUNCTIONS", 
                                                             "BOOSTED", 
                                                             "PROCEDURE", 
                                                             "PROCEDURES", 
                                                             "ADMIN", "ADMINISTRATOR", 
                                                             "BRIEF", "VERBOSE", 
                                                             "OUTPUT", "StringLiteral", 
                                                             "UrlHex", "EscapedChar", 
                                                             "HexInteger", 
                                                             "DecimalInteger", 
                                                             "OctalInteger", 
                                                             "HexLetter", 
                                                             "HexDigit", 
                                                             "Digit", "NonZeroDigit", 
                                                             "NonZeroOctDigit", 
                                                             "OctDigit", 
                                                             "ZeroDigit", 
                                                             "ExponentDecimalReal", 
                                                             "RegularDecimalReal", 
                                                             "UnescapedSymbolicName", 
                                                             "IdentifierStart", 
                                                             "IdentifierPart", 
                                                             "EscapedSymbolicName", 
                                                             "SP", "WHITESPACE", 
                                                             "Comment", 
                                                             "ERROR_TOKEN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cypher", "cypherPart", "cypherConsoleCommand", "cypherConsoleCommandName", 
		"cypherConsoleCommandParameters", "cypherConsoleCommandParameter", "arrowExpression", 
		"url", "uri", "scheme", "host", "hostname", "hostnumber", "port", "path", 
		"user", "login", "password", "frag", "urlQuery", "search", "searchparameter", 
		"string", "urlDigits", "json", "obj", "pair", "array", "value", "keyValueLiteral", 
		"commandPath", "subCommand", "cypherQuery", "queryOptions", "anyCypherOption", 
		"cypherOption", "versionNumber", "explain", "profile", "configurationOption", 
		"statement", "query", "regularQuery", "bulkImportQuery", "singleQuery", 
		"periodicCommitHint", "loadCSVQuery", "union", "clause", "command", "systemCommand", 
		"multidatabaseCommand", "userCommand", "privilegeCommand", "showRoles", 
		"createRole", "copyRole", "dropRole", "showUsers", "createUser", "dropUser", 
		"alterUser", "showPrivileges", "grantPrivilege", "denyPrivilege", "revokePrivilege", 
		"revokePart", "databaseScope", "graphScope", "roles", "grantableGraphPrivileges", 
		"revokeableGraphPrivileges", "datasbasePrivilege", "dbmsPrivilege", "elementScope", 
		"propertiesList", "propertyScope", "showDatabase", "createDatabase", "dropDatabase", 
		"startDatabase", "stopDatabase", "ifNotExists", "ifExists", "orReplace", 
		"setPassword", "passwordStatus", "setStatus", "userStatus", "createUniqueConstraint", 
		"createNodeKeyConstraint", "createNodePropertyExistenceConstraint", "createRelationshipPropertyExistenceConstraint", 
		"createIndex", "dropUniqueConstraint", "dropNodeKeyConstraint", "dropNodePropertyExistenceConstraint", 
		"dropRelationshipPropertyExistenceConstraint", "dropIndex", "index", "uniqueConstraint", 
		"nodeKeyConstraint", "nodePropertyExistenceConstraint", "relationshipPropertyExistenceConstraint", 
		"relationshipPatternSyntax", "loadCSVClause", "matchClause", "unwindClause", 
		"mergeClause", "mergeAction", "createClause", "createUniqueClause", "setClause", 
		"setItem", "deleteClause", "removeClause", "removeItem", "foreachClause", 
		"withClause", "returnClause", "returnBody", "func", "returnItems", "returnItem", 
		"asMapping", "call", "subqueryClause", "subquery", "procedureInvocation", 
		"procedureInvocationBody", "procedureArguments", "procedureResults", "procedureResult", 
		"aliasedProcedureResult", "simpleProcedureResult", "procedureOutput", 
		"order", "skip", "limit", "sortItem", "hint", "startClause", "startPoint", 
		"lookup", "nodeLookup", "relationshipLookup", "identifiedIndexLookup", 
		"indexQuery", "idLookup", "literalIds", "where", "pattern", "patternPart", 
		"anonymousPatternPart", "patternElement", "nodePattern", "patternElementChain", 
		"relationshipPattern", "relationshipPatternStart", "relationshipPatternEnd", 
		"relationshipDetail", "properties", "relType", "relationshipTypeTermAtom", 
		"relationshipTypeTerm", "wildcardRelationshipType", "orRelationshipTypeTerm", 
		"andRelationshipTypeTerm", "notRelationshipTypeTerm", "parenthesizedRelationshipTypeTerm", 
		"relationshipTypes", "relationshipType", "inversionToken", "relationshipTypeOptionalColon", 
		"nodeLabels", "nodeLabel", "labelAtom", "labelTerm", "wildcardLabel", 
		"orLabelTerm", "andLabelTerm", "notLabelTerm", "parenthesizedLabelTerm", 
		"rangeLiteral", "labelName", "relTypeName", "expression", "existsSubQuery", 
		"existsSubQueryBody", "subqueryPatternBody", "orExpression", "xorExpression", 
		"andExpression", "notExpression", "comparisonExpression", "addOrSubtractExpression", 
		"multiplyDivideModuloExpression", "powerOfExpression", "unaryAddOrSubtractExpression", 
		"stringListNullOperatorExpression", "propertyOrLabelsExpression", "filterFunction", 
		"filterFunctionName", "existsFunction", "existsFunctionName", "allFunction", 
		"allFunctionName", "anyFunction", "anyFunctionName", "noneFunction", "noneFunctionName", 
		"singleFunction", "singleFunctionName", "extractFunction", "extractFunctionName", 
		"reduceFunction", "reduceFunctionName", "shortestPathPatternFunction", 
		"shortestPathFunctionName", "allShortestPathFunctionName", "atom", "literal", 
		"stringLiteral", "booleanLiteral", "listLiteral", "partialComparisonExpression", 
		"parenthesizedExpression", "relationshipsPattern", "filterExpression", 
		"idInColl", "functionInvocation", "functionInvocationBody", "functionName", 
		"procedureName", "listComprehension", "patternComprehension", "propertyLookup", 
		"caseExpression", "caseAlternatives", "variable", "numberLiteral", "mapLiteral", 
		"mapProjection", "mapProjectionVariants", "literalEntry", "propertySelector", 
		"variableSelector", "allPropertiesSelector", "parameter", "legacyParameter", 
		"newParameter", "parameterName", "propertyExpressions", "propertyExpression", 
		"propertyKeys", "propertyKeyName", "integerLiteral", "doubleLiteral", 
		"namespace", "leftArrowHead", "rightArrowHead", "dash", "symbolicName", 
		"keyword",
	];
	public get grammarFileName(): string { return "Cypher.g4"; }
	public get literalNames(): (string | null)[] { return CypherParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CypherParser.symbolicNames; }
	public get ruleNames(): string[] { return CypherParser.ruleNames; }
	public get serializedATN(): number[] { return CypherParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CypherParser._ATN, CypherParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public cypher(): CypherContext {
		let localctx: CypherContext = new CypherContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CypherParser.RULE_cypher);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 528;
			this.cypherPart();
			this.state = 533;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 529;
					this.match(CypherParser.T__0);
					this.state = 530;
					this.cypherPart();
					}
					}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 536;
				this.match(CypherParser.T__0);
				}
			}

			this.state = 539;
			this.match(CypherParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherPart(): CypherPartContext {
		let localctx: CypherPartContext = new CypherPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CypherParser.RULE_cypherPart);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 541;
				this.match(CypherParser.SP);
				}
			}

			this.state = 546;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
			case 56:
			case 57:
			case 58:
			case 63:
			case 64:
			case 72:
			case 74:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 90:
			case 101:
			case 130:
			case 133:
			case 134:
			case 143:
			case 155:
			case 159:
			case 160:
			case 161:
				{
				this.state = 544;
				this.cypherQuery();
				}
				break;
			case 2:
				{
				this.state = 545;
				this.cypherConsoleCommand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 548;
				this.match(CypherParser.SP);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommand(): CypherConsoleCommandContext {
		let localctx: CypherConsoleCommandContext = new CypherConsoleCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CypherParser.RULE_cypherConsoleCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 551;
			this.cypherConsoleCommandName();
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.match(CypherParser.SP);
				this.state = 553;
				this.cypherConsoleCommandParameters();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommandName(): CypherConsoleCommandNameContext {
		let localctx: CypherConsoleCommandNameContext = new CypherConsoleCommandNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CypherParser.RULE_cypherConsoleCommandName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 556;
			this.match(CypherParser.T__1);
			this.state = 557;
			this.symbolicName();
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 558;
				this.match(CypherParser.T__2);
				this.state = 559;
				this.symbolicName();
				}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommandParameters(): CypherConsoleCommandParametersContext {
		let localctx: CypherConsoleCommandParametersContext = new CypherConsoleCommandParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CypherParser.RULE_cypherConsoleCommandParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 565;
			this.cypherConsoleCommandParameter();
			this.state = 570;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 566;
					this.match(CypherParser.SP);
					this.state = 567;
					this.cypherConsoleCommandParameter();
					}
					}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommandParameter(): CypherConsoleCommandParameterContext {
		let localctx: CypherConsoleCommandParameterContext = new CypherConsoleCommandParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CypherParser.RULE_cypherConsoleCommandParameter);
		try {
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 573;
				this.url();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 574;
				this.json();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 575;
				this.arrowExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 576;
				this.mapLiteral();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 577;
				this.keyValueLiteral();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 578;
				this.stringLiteral();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 579;
				this.numberLiteral();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 580;
				this.booleanLiteral();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 581;
				this.subCommand();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 582;
				this.commandPath();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowExpression(): ArrowExpressionContext {
		let localctx: ArrowExpressionContext = new ArrowExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CypherParser.RULE_arrowExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 585;
			this.symbolicName();
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 586;
				this.match(CypherParser.SP);
				}
			}

			this.state = 589;
			this.match(CypherParser.T__3);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 590;
				this.match(CypherParser.SP);
				}
			}

			this.state = 593;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let localctx: UrlContext = new UrlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, CypherParser.RULE_url);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 595;
			this.uri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uri(): UriContext {
		let localctx: UriContext = new UriContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, CypherParser.RULE_uri);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 597;
			this.scheme();
			this.state = 598;
			this.match(CypherParser.T__4);
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 599;
				this.login();
				}
				break;
			}
			this.state = 602;
			this.host();
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 603;
				this.match(CypherParser.T__1);
				this.state = 604;
				this.port();
				}
			}

			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 607;
				this.match(CypherParser.T__5);
				this.state = 608;
				this.path();
				}
			}

			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 611;
				this.urlQuery();
				}
			}

			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 614;
				this.frag();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scheme(): SchemeContext {
		let localctx: SchemeContext = new SchemeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CypherParser.RULE_scheme);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 617;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public host(): HostContext {
		let localctx: HostContext = new HostContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, CypherParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 619;
				this.match(CypherParser.T__5);
				}
			}

			this.state = 624;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 206:
			case 215:
			case 218:
				{
				this.state = 622;
				this.hostname();
				}
				break;
			case 203:
			case 204:
			case 205:
				{
				this.state = 623;
				this.hostnumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hostname(): HostnameContext {
		let localctx: HostnameContext = new HostnameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, CypherParser.RULE_hostname);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 626;
			this.string_();
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 627;
				this.match(CypherParser.T__6);
				this.state = 628;
				this.string_();
				}
				}
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hostnumber(): HostnumberContext {
		let localctx: HostnumberContext = new HostnumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CypherParser.RULE_hostnumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
			this.urlDigits();
			this.state = 635;
			this.match(CypherParser.T__6);
			this.state = 636;
			this.urlDigits();
			this.state = 637;
			this.match(CypherParser.T__6);
			this.state = 638;
			this.urlDigits();
			this.state = 639;
			this.match(CypherParser.T__6);
			this.state = 640;
			this.urlDigits();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public port(): PortContext {
		let localctx: PortContext = new PortContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CypherParser.RULE_port);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 642;
			this.urlDigits();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let localctx: PathContext = new PathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, CypherParser.RULE_path);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 644;
			this.string_();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 645;
				this.match(CypherParser.T__5);
				this.state = 646;
				this.string_();
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public user(): UserContext {
		let localctx: UserContext = new UserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CypherParser.RULE_user);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public login(): LoginContext {
		let localctx: LoginContext = new LoginContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CypherParser.RULE_login);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 654;
			this.user();
			this.state = 655;
			this.match(CypherParser.T__1);
			this.state = 656;
			this.password();
			this.state = 657;
			this.match(CypherParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public password(): PasswordContext {
		let localctx: PasswordContext = new PasswordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CypherParser.RULE_password);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 659;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frag(): FragContext {
		let localctx: FragContext = new FragContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CypherParser.RULE_frag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 661;
			this.match(CypherParser.T__8);
			this.state = 662;
			this.string_();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public urlQuery(): UrlQueryContext {
		let localctx: UrlQueryContext = new UrlQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, CypherParser.RULE_urlQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 664;
			this.match(CypherParser.T__9);
			this.state = 665;
			this.search();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public search(): SearchContext {
		let localctx: SearchContext = new SearchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CypherParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 667;
			this.searchparameter();
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 668;
				this.match(CypherParser.T__10);
				this.state = 669;
				this.searchparameter();
				}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public searchparameter(): SearchparameterContext {
		let localctx: SearchparameterContext = new SearchparameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CypherParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 675;
			this.string_();
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 676;
				this.match(CypherParser.T__11);
				this.state = 680;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 206:
				case 215:
				case 218:
					{
					this.state = 677;
					this.string_();
					}
					break;
				case 203:
				case 204:
				case 205:
					{
					this.state = 678;
					this.urlDigits();
					}
					break;
				case 201:
					{
					this.state = 679;
					this.match(CypherParser.UrlHex);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CypherParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 684;
			this.symbolicName();
			this.state = 691;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 686;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===7 || _la===13) {
						{
						this.state = 685;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===13)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
					}

					this.state = 688;
					this.symbolicName();
					}
					}
				}
				this.state = 693;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public urlDigits(): UrlDigitsContext {
		let localctx: UrlDigitsContext = new UrlDigitsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CypherParser.RULE_urlDigits);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 694;
				this.integerLiteral();
				}
				}
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 7) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let localctx: JsonContext = new JsonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, CypherParser.RULE_json);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let localctx: ObjContext = new ObjContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, CypherParser.RULE_obj);
		let _la: number;
		try {
			this.state = 729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 701;
				this.match(CypherParser.T__13);
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 702;
					this.match(CypherParser.SP);
					}
				}

				this.state = 705;
				this.pair();
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 706;
					this.match(CypherParser.SP);
					}
				}

				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 709;
					this.match(CypherParser.T__14);
					this.state = 711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 710;
						this.match(CypherParser.SP);
						}
					}

					this.state = 713;
					this.pair();
					this.state = 715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 714;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 722;
				this.match(CypherParser.T__15);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 724;
				this.match(CypherParser.T__13);
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 725;
					this.match(CypherParser.SP);
					}
				}

				this.state = 728;
				this.match(CypherParser.T__15);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let localctx: PairContext = new PairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, CypherParser.RULE_pair);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 731;
			this.stringLiteral();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 732;
				this.match(CypherParser.SP);
				}
			}

			this.state = 735;
			this.match(CypherParser.T__1);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 736;
				this.match(CypherParser.SP);
				}
			}

			this.state = 739;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let localctx: ArrayContext = new ArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, CypherParser.RULE_array);
		let _la: number;
		try {
			this.state = 769;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 741;
				this.match(CypherParser.T__16);
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 742;
					this.match(CypherParser.SP);
					}
				}

				this.state = 745;
				this.value();
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 746;
					this.match(CypherParser.SP);
					}
				}

				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 749;
					this.match(CypherParser.T__14);
					this.state = 751;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 750;
						this.match(CypherParser.SP);
						}
					}

					this.state = 753;
					this.value();
					this.state = 755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 754;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 762;
				this.match(CypherParser.T__17);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 764;
				this.match(CypherParser.T__16);
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 765;
					this.match(CypherParser.SP);
					}
				}

				this.state = 768;
				this.match(CypherParser.T__17);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, CypherParser.RULE_value);
		try {
			this.state = 777;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 200:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 771;
				this.stringLiteral();
				}
				break;
			case 203:
			case 204:
			case 205:
			case 213:
			case 214:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 772;
				this.numberLiteral();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 773;
				this.obj();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 774;
				this.array();
				}
				break;
			case 122:
			case 123:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 775;
				this.booleanLiteral();
				}
				break;
			case 115:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 776;
				this.match(CypherParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyValueLiteral(): KeyValueLiteralContext {
		let localctx: KeyValueLiteralContext = new KeyValueLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, CypherParser.RULE_keyValueLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 779;
			this.variable();
			this.state = 780;
			this.match(CypherParser.T__1);
			this.state = 781;
			this.match(CypherParser.SP);
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 782;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 2:
				{
				this.state = 783;
				this.numberLiteral();
				}
				break;
			case 3:
				{
				this.state = 784;
				this.booleanLiteral();
				}
				break;
			case 4:
				{
				this.state = 785;
				this.symbolicName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandPath(): CommandPathContext {
		let localctx: CommandPathContext = new CommandPathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, CypherParser.RULE_commandPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 793;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 788;
					this.match(CypherParser.T__5);
					this.state = 791;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 65:
					case 66:
					case 67:
					case 68:
					case 69:
					case 70:
					case 71:
					case 72:
					case 73:
					case 74:
					case 75:
					case 76:
					case 77:
					case 78:
					case 79:
					case 80:
					case 81:
					case 82:
					case 83:
					case 84:
					case 85:
					case 86:
					case 87:
					case 88:
					case 89:
					case 90:
					case 91:
					case 92:
					case 93:
					case 94:
					case 95:
					case 96:
					case 97:
					case 98:
					case 99:
					case 100:
					case 101:
					case 102:
					case 103:
					case 104:
					case 105:
					case 106:
					case 107:
					case 108:
					case 109:
					case 110:
					case 111:
					case 112:
					case 113:
					case 114:
					case 115:
					case 116:
					case 117:
					case 118:
					case 119:
					case 120:
					case 121:
					case 122:
					case 123:
					case 124:
					case 125:
					case 126:
					case 127:
					case 128:
					case 129:
					case 130:
					case 131:
					case 132:
					case 133:
					case 134:
					case 135:
					case 136:
					case 137:
					case 138:
					case 139:
					case 140:
					case 141:
					case 142:
					case 143:
					case 144:
					case 145:
					case 146:
					case 147:
					case 148:
					case 149:
					case 150:
					case 151:
					case 152:
					case 153:
					case 154:
					case 155:
					case 156:
					case 157:
					case 158:
					case 159:
					case 160:
					case 161:
					case 162:
					case 163:
					case 164:
					case 165:
					case 166:
					case 167:
					case 168:
					case 169:
					case 170:
					case 171:
					case 172:
					case 173:
					case 174:
					case 175:
					case 176:
					case 177:
					case 178:
					case 179:
					case 180:
					case 181:
					case 182:
					case 183:
					case 184:
					case 185:
					case 186:
					case 187:
					case 188:
					case 189:
					case 190:
					case 191:
					case 192:
					case 193:
					case 194:
					case 195:
					case 196:
					case 197:
					case 198:
					case 199:
					case 206:
					case 215:
					case 218:
						{
						this.state = 789;
						this.symbolicName();
						}
						break;
					case 203:
					case 204:
					case 205:
					case 213:
					case 214:
						{
						this.state = 790;
						this.numberLiteral();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 795;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 797;
				this.match(CypherParser.T__5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subCommand(): SubCommandContext {
		let localctx: SubCommandContext = new SubCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, CypherParser.RULE_subCommand);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 800;
			this.symbolicName();
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 801;
				this.match(CypherParser.T__2);
				this.state = 802;
				this.symbolicName();
				}
				}
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherQuery(): CypherQueryContext {
		let localctx: CypherQueryContext = new CypherQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, CypherParser.RULE_cypherQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 808;
			this.queryOptions();
			this.state = 809;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public queryOptions(): QueryOptionsContext {
		let localctx: QueryOptionsContext = new QueryOptionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, CypherParser.RULE_queryOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 7) !== 0)) {
				{
				{
				this.state = 811;
				this.anyCypherOption();
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 812;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anyCypherOption(): AnyCypherOptionContext {
		let localctx: AnyCypherOptionContext = new AnyCypherOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, CypherParser.RULE_anyCypherOption);
		try {
			this.state = 823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 820;
				this.cypherOption();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 821;
				this.explain();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 822;
				this.profile();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherOption(): CypherOptionContext {
		let localctx: CypherOptionContext = new CypherOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, CypherParser.RULE_cypherOption);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 825;
			this.match(CypherParser.CYPHER);
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 826;
				this.match(CypherParser.SP);
				this.state = 827;
				this.versionNumber();
				}
				break;
			}
			this.state = 834;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 830;
					this.match(CypherParser.SP);
					this.state = 831;
					this.configurationOption();
					}
					}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public versionNumber(): VersionNumberContext {
		let localctx: VersionNumberContext = new VersionNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, CypherParser.RULE_versionNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 837;
			this.match(CypherParser.RegularDecimalReal);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explain(): ExplainContext {
		let localctx: ExplainContext = new ExplainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, CypherParser.RULE_explain);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 839;
			this.match(CypherParser.EXPLAIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public profile(): ProfileContext {
		let localctx: ProfileContext = new ProfileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, CypherParser.RULE_profile);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 841;
			this.match(CypherParser.PROFILE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public configurationOption(): ConfigurationOptionContext {
		let localctx: ConfigurationOptionContext = new ConfigurationOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, CypherParser.RULE_configurationOption);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 843;
			this.symbolicName();
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 844;
				this.match(CypherParser.SP);
				}
			}

			this.state = 847;
			this.match(CypherParser.T__11);
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 848;
				this.match(CypherParser.SP);
				}
			}

			this.state = 851;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, CypherParser.RULE_statement);
		let _la: number;
		try {
			this.state = 860;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 853;
				this.command();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 854;
				this.query();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===133) {
					{
					this.state = 855;
					this.match(CypherParser.CATALOG);
					this.state = 856;
					this.match(CypherParser.SP);
					}
				}

				this.state = 859;
				this.systemCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, CypherParser.RULE_query);
		try {
			this.state = 864;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
			case 72:
			case 74:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 90:
			case 101:
			case 130:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 862;
				this.regularQuery();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 863;
				this.bulkImportQuery();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regularQuery(): RegularQueryContext {
		let localctx: RegularQueryContext = new RegularQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, CypherParser.RULE_regularQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 866;
			this.singleQuery();
			this.state = 873;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 868;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 867;
						this.match(CypherParser.SP);
						}
					}

					this.state = 870;
					this.union();
					}
					}
				}
				this.state = 875;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bulkImportQuery(): BulkImportQueryContext {
		let localctx: BulkImportQueryContext = new BulkImportQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, CypherParser.RULE_bulkImportQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 876;
			this.periodicCommitHint();
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 877;
				this.match(CypherParser.SP);
				}
			}

			this.state = 880;
			this.loadCSVQuery();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleQuery(): SingleQueryContext {
		let localctx: SingleQueryContext = new SingleQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, CypherParser.RULE_singleQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 882;
			this.clause();
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 883;
						this.match(CypherParser.SP);
						}
					}

					this.state = 886;
					this.clause();
					}
					}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public periodicCommitHint(): PeriodicCommitHintContext {
		let localctx: PeriodicCommitHintContext = new PeriodicCommitHintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, CypherParser.RULE_periodicCommitHint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 892;
			this.match(CypherParser.USING);
			this.state = 893;
			this.match(CypherParser.SP);
			this.state = 894;
			this.match(CypherParser.PERIODIC);
			this.state = 895;
			this.match(CypherParser.SP);
			this.state = 896;
			this.match(CypherParser.COMMIT);
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 897;
				this.match(CypherParser.SP);
				this.state = 898;
				this.integerLiteral();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loadCSVQuery(): LoadCSVQueryContext {
		let localctx: LoadCSVQueryContext = new LoadCSVQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, CypherParser.RULE_loadCSVQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 901;
			this.loadCSVClause();
			this.state = 908;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 903;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 902;
						this.match(CypherParser.SP);
						}
					}

					this.state = 905;
					this.clause();
					}
					}
				}
				this.state = 910;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public union(): UnionContext {
		let localctx: UnionContext = new UnionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, CypherParser.RULE_union);
		let _la: number;
		try {
			this.state = 923;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 911;
				this.match(CypherParser.UNION);
				this.state = 912;
				this.match(CypherParser.SP);
				this.state = 913;
				this.match(CypherParser.ALL);
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 914;
					this.match(CypherParser.SP);
					}
				}

				this.state = 917;
				this.singleQuery();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 918;
				this.match(CypherParser.UNION);
				this.state = 920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 919;
					this.match(CypherParser.SP);
					}
				}

				this.state = 922;
				this.singleQuery();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clause(): ClauseContext {
		let localctx: ClauseContext = new ClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, CypherParser.RULE_clause);
		try {
			this.state = 940;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 925;
				this.loadCSVClause();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 926;
				this.startClause();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 927;
				this.matchClause();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 928;
				this.unwindClause();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 929;
				this.mergeClause();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 930;
				this.createClause();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 931;
				this.createUniqueClause();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 932;
				this.setClause();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 933;
				this.deleteClause();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 934;
				this.removeClause();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 935;
				this.foreachClause();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 936;
				this.withClause();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 937;
				this.returnClause();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 938;
				this.call();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 939;
				this.subqueryClause();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, CypherParser.RULE_command);
		try {
			this.state = 952;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 942;
				this.createIndex();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 943;
				this.dropIndex();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 944;
				this.createUniqueConstraint();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 945;
				this.dropUniqueConstraint();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 946;
				this.createNodeKeyConstraint();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 947;
				this.dropNodeKeyConstraint();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 948;
				this.createNodePropertyExistenceConstraint();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 949;
				this.dropNodePropertyExistenceConstraint();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 950;
				this.createRelationshipPropertyExistenceConstraint();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 951;
				this.dropRelationshipPropertyExistenceConstraint();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public systemCommand(): SystemCommandContext {
		let localctx: SystemCommandContext = new SystemCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, CypherParser.RULE_systemCommand);
		try {
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 954;
				this.multidatabaseCommand();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 955;
				this.userCommand();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 956;
				this.privilegeCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multidatabaseCommand(): MultidatabaseCommandContext {
		let localctx: MultidatabaseCommandContext = new MultidatabaseCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, CypherParser.RULE_multidatabaseCommand);
		try {
			this.state = 964;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 134:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 959;
				this.showDatabase();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 960;
				this.createDatabase();
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 961;
				this.dropDatabase();
				}
				break;
			case 101:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 962;
				this.startDatabase();
				}
				break;
			case 143:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 963;
				this.stopDatabase();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userCommand(): UserCommandContext {
		let localctx: UserCommandContext = new UserCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, CypherParser.RULE_userCommand);
		try {
			this.state = 973;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 966;
				this.showRoles();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 967;
				this.createRole();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 968;
				this.dropRole();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 969;
				this.showUsers();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 970;
				this.createUser();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 971;
				this.dropUser();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 972;
				this.alterUser();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public privilegeCommand(): PrivilegeCommandContext {
		let localctx: PrivilegeCommandContext = new PrivilegeCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, CypherParser.RULE_privilegeCommand);
		try {
			this.state = 979;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 134:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 975;
				this.showPrivileges();
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 976;
				this.grantPrivilege();
				}
				break;
			case 160:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 977;
				this.denyPrivilege();
				}
				break;
			case 161:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 978;
				this.revokePrivilege();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showRoles(): ShowRolesContext {
		let localctx: ShowRolesContext = new ShowRolesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, CypherParser.RULE_showRoles);
		let _la: number;
		try {
			this.state = 1007;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 981;
				this.match(CypherParser.SHOW);
				this.state = 982;
				this.match(CypherParser.SP);
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===62) {
					{
					this.state = 983;
					this.match(CypherParser.ALL);
					this.state = 984;
					this.match(CypherParser.SP);
					}
				}

				this.state = 987;
				this.match(CypherParser.ROLES);
				this.state = 992;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 988;
					this.match(CypherParser.SP);
					this.state = 989;
					this.match(CypherParser.WITH);
					this.state = 990;
					this.match(CypherParser.SP);
					this.state = 991;
					this.match(CypherParser.USERS);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 994;
				this.match(CypherParser.SHOW);
				this.state = 995;
				this.match(CypherParser.SP);
				this.state = 998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===148) {
					{
					this.state = 996;
					this.match(CypherParser.POPULATED);
					this.state = 997;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1000;
				this.match(CypherParser.ROLES);
				this.state = 1005;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 1001;
					this.match(CypherParser.SP);
					this.state = 1002;
					this.match(CypherParser.WITH);
					this.state = 1003;
					this.match(CypherParser.SP);
					this.state = 1004;
					this.match(CypherParser.USERS);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createRole(): CreateRoleContext {
		let localctx: CreateRoleContext = new CreateRoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, CypherParser.RULE_createRole);
		let _la: number;
		try {
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1009;
				this.match(CypherParser.CREATE);
				this.state = 1010;
				this.match(CypherParser.SP);
				this.state = 1011;
				this.match(CypherParser.ROLE);
				this.state = 1012;
				this.match(CypherParser.SP);
				this.state = 1013;
				this.symbolicName();
				this.state = 1016;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 1014;
					this.match(CypherParser.SP);
					this.state = 1015;
					this.ifNotExists();
					}
					break;
				}
				this.state = 1020;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 1018;
					this.match(CypherParser.SP);
					this.state = 1019;
					this.copyRole();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1022;
				this.match(CypherParser.CREATE);
				this.state = 1023;
				this.match(CypherParser.SP);
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 1024;
					this.orReplace();
					this.state = 1025;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1029;
				this.match(CypherParser.ROLE);
				this.state = 1030;
				this.match(CypherParser.SP);
				this.state = 1031;
				this.symbolicName();
				this.state = 1034;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 1032;
					this.match(CypherParser.SP);
					this.state = 1033;
					this.copyRole();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public copyRole(): CopyRoleContext {
		let localctx: CopyRoleContext = new CopyRoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, CypherParser.RULE_copyRole);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1038;
			this.match(CypherParser.AS);
			this.state = 1039;
			this.match(CypherParser.SP);
			this.state = 1040;
			this.match(CypherParser.COPY);
			this.state = 1041;
			this.match(CypherParser.SP);
			this.state = 1042;
			this.match(CypherParser.OF);
			this.state = 1043;
			this.match(CypherParser.SP);
			this.state = 1044;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropRole(): DropRoleContext {
		let localctx: DropRoleContext = new DropRoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, CypherParser.RULE_dropRole);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1046;
			this.match(CypherParser.DROP);
			this.state = 1047;
			this.match(CypherParser.SP);
			this.state = 1048;
			this.match(CypherParser.ROLE);
			this.state = 1049;
			this.match(CypherParser.SP);
			this.state = 1050;
			this.symbolicName();
			this.state = 1055;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 1051;
				this.match(CypherParser.SP);
				this.state = 1052;
				this.match(CypherParser.IF);
				this.state = 1053;
				this.match(CypherParser.SP);
				this.state = 1054;
				this.match(CypherParser.EXISTS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showUsers(): ShowUsersContext {
		let localctx: ShowUsersContext = new ShowUsersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, CypherParser.RULE_showUsers);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1057;
			this.match(CypherParser.SHOW);
			this.state = 1058;
			this.match(CypherParser.SP);
			this.state = 1059;
			this.match(CypherParser.USERS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createUser(): CreateUserContext {
		let localctx: CreateUserContext = new CreateUserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, CypherParser.RULE_createUser);
		let _la: number;
		try {
			this.state = 1092;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1061;
				this.match(CypherParser.CREATE);
				this.state = 1062;
				this.match(CypherParser.SP);
				this.state = 1063;
				this.match(CypherParser.USER);
				this.state = 1064;
				this.match(CypherParser.SP);
				this.state = 1065;
				this.user();
				this.state = 1066;
				this.match(CypherParser.SP);
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1067;
					this.match(CypherParser.SP);
					this.state = 1068;
					this.ifNotExists();
					}
				}

				this.state = 1071;
				this.setPassword();
				this.state = 1074;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 1072;
					this.match(CypherParser.SP);
					this.state = 1073;
					this.setStatus();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1076;
				this.match(CypherParser.CREATE);
				this.state = 1077;
				this.match(CypherParser.SP);
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 1078;
					this.orReplace();
					this.state = 1079;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1083;
				this.match(CypherParser.USER);
				this.state = 1084;
				this.match(CypherParser.SP);
				this.state = 1085;
				this.user();
				this.state = 1086;
				this.match(CypherParser.SP);
				this.state = 1087;
				this.setPassword();
				this.state = 1090;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 1088;
					this.match(CypherParser.SP);
					this.state = 1089;
					this.setStatus();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropUser(): DropUserContext {
		let localctx: DropUserContext = new DropUserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, CypherParser.RULE_dropUser);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1094;
			this.match(CypherParser.DROP);
			this.state = 1095;
			this.match(CypherParser.SP);
			this.state = 1096;
			this.match(CypherParser.USER);
			this.state = 1097;
			this.match(CypherParser.SP);
			this.state = 1098;
			this.user();
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 1099;
				this.match(CypherParser.SP);
				this.state = 1100;
				this.ifExists();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterUser(): AlterUserContext {
		let localctx: AlterUserContext = new AlterUserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, CypherParser.RULE_alterUser);
		try {
			this.state = 1144;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1103;
				this.match(CypherParser.ALTER);
				this.state = 1104;
				this.match(CypherParser.SP);
				this.state = 1105;
				this.match(CypherParser.CURRENT);
				this.state = 1106;
				this.match(CypherParser.SP);
				this.state = 1107;
				this.match(CypherParser.USER);
				this.state = 1108;
				this.match(CypherParser.SP);
				this.state = 1109;
				this.match(CypherParser.SET);
				this.state = 1110;
				this.match(CypherParser.SP);
				this.state = 1111;
				this.match(CypherParser.PASSWORD);
				this.state = 1112;
				this.match(CypherParser.SP);
				this.state = 1113;
				this.match(CypherParser.FROM);
				this.state = 1114;
				this.match(CypherParser.SP);
				this.state = 1117;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 206:
				case 215:
				case 218:
					{
					this.state = 1115;
					this.password();
					}
					break;
				case 14:
				case 35:
					{
					this.state = 1116;
					this.parameter();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1119;
				this.match(CypherParser.TO);
				this.state = 1120;
				this.match(CypherParser.SP);
				this.state = 1123;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 206:
				case 215:
				case 218:
					{
					this.state = 1121;
					this.password();
					}
					break;
				case 14:
				case 35:
					{
					this.state = 1122;
					this.parameter();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1125;
				this.match(CypherParser.ALTER);
				this.state = 1126;
				this.match(CypherParser.SP);
				this.state = 1127;
				this.match(CypherParser.USER);
				this.state = 1128;
				this.match(CypherParser.SP);
				this.state = 1129;
				this.user();
				this.state = 1130;
				this.match(CypherParser.SP);
				this.state = 1131;
				this.setPassword();
				this.state = 1134;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 1132;
					this.match(CypherParser.SP);
					this.state = 1133;
					this.setStatus();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1136;
				this.match(CypherParser.ALTER);
				this.state = 1137;
				this.match(CypherParser.SP);
				this.state = 1138;
				this.match(CypherParser.USER);
				this.state = 1139;
				this.match(CypherParser.SP);
				this.state = 1140;
				this.user();
				this.state = 1141;
				this.match(CypherParser.SP);
				this.state = 1142;
				this.setStatus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showPrivileges(): ShowPrivilegesContext {
		let localctx: ShowPrivilegesContext = new ShowPrivilegesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, CypherParser.RULE_showPrivileges);
		let _la: number;
		try {
			this.state = 1173;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1146;
				this.match(CypherParser.SHOW);
				this.state = 1147;
				this.match(CypherParser.SP);
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===62) {
					{
					this.state = 1148;
					this.match(CypherParser.ALL);
					this.state = 1149;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1152;
				this.match(CypherParser.PRIVILEGES);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1153;
				this.match(CypherParser.SHOW);
				this.state = 1154;
				this.match(CypherParser.SP);
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===144) {
					{
					this.state = 1155;
					this.match(CypherParser.ROLE);
					this.state = 1156;
					this.match(CypherParser.SP);
					this.state = 1157;
					this.symbolicName();
					this.state = 1158;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1162;
				this.match(CypherParser.PRIVILEGES);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1163;
				this.match(CypherParser.SHOW);
				this.state = 1164;
				this.match(CypherParser.SP);
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1165;
					this.match(CypherParser.USER);
					this.state = 1166;
					this.match(CypherParser.SP);
					this.state = 1167;
					this.user();
					this.state = 1168;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1172;
				this.match(CypherParser.PRIVILEGES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grantPrivilege(): GrantPrivilegeContext {
		let localctx: GrantPrivilegeContext = new GrantPrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, CypherParser.RULE_grantPrivilege);
		try {
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1175;
				this.match(CypherParser.GRANT);
				this.state = 1176;
				this.match(CypherParser.SP);
				this.state = 1177;
				this.match(CypherParser.ROLE);
				this.state = 1178;
				this.match(CypherParser.SP);
				this.state = 1179;
				this.roles();
				this.state = 1180;
				this.match(CypherParser.SP);
				this.state = 1181;
				this.match(CypherParser.TO);
				this.state = 1182;
				this.match(CypherParser.SP);
				this.state = 1183;
				this.user();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1185;
				this.match(CypherParser.GRANT);
				this.state = 1186;
				this.match(CypherParser.SP);
				this.state = 1187;
				this.datasbasePrivilege();
				this.state = 1188;
				this.match(CypherParser.SP);
				this.state = 1189;
				this.match(CypherParser.ON);
				this.state = 1190;
				this.match(CypherParser.SP);
				this.state = 1191;
				this.databaseScope();
				this.state = 1192;
				this.match(CypherParser.SP);
				this.state = 1193;
				this.match(CypherParser.TO);
				this.state = 1194;
				this.roles();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1196;
				this.match(CypherParser.GRANT);
				this.state = 1197;
				this.match(CypherParser.SP);
				this.state = 1198;
				this.grantableGraphPrivileges();
				this.state = 1199;
				this.match(CypherParser.SP);
				this.state = 1200;
				this.match(CypherParser.ON);
				this.state = 1201;
				this.match(CypherParser.SP);
				this.state = 1202;
				this.graphScope();
				this.state = 1203;
				this.match(CypherParser.SP);
				this.state = 1204;
				this.elementScope();
				this.state = 1205;
				this.match(CypherParser.SP);
				this.state = 1206;
				this.match(CypherParser.TO);
				this.state = 1207;
				this.roles();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1209;
				this.match(CypherParser.GRANT);
				this.state = 1210;
				this.match(CypherParser.SP);
				this.state = 1211;
				this.dbmsPrivilege();
				this.state = 1212;
				this.match(CypherParser.SP);
				this.state = 1213;
				this.match(CypherParser.ON);
				this.state = 1214;
				this.match(CypherParser.SP);
				this.state = 1215;
				this.match(CypherParser.DBMS);
				this.state = 1216;
				this.match(CypherParser.SP);
				this.state = 1217;
				this.match(CypherParser.TO);
				this.state = 1218;
				this.roles();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public denyPrivilege(): DenyPrivilegeContext {
		let localctx: DenyPrivilegeContext = new DenyPrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, CypherParser.RULE_denyPrivilege);
		try {
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1222;
				this.match(CypherParser.DENY);
				this.state = 1223;
				this.match(CypherParser.SP);
				this.state = 1224;
				this.match(CypherParser.ROLE);
				this.state = 1225;
				this.match(CypherParser.SP);
				this.state = 1226;
				this.roles();
				this.state = 1227;
				this.match(CypherParser.SP);
				this.state = 1228;
				this.match(CypherParser.TO);
				this.state = 1229;
				this.match(CypherParser.SP);
				this.state = 1230;
				this.user();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1232;
				this.match(CypherParser.DENY);
				this.state = 1233;
				this.match(CypherParser.SP);
				this.state = 1234;
				this.datasbasePrivilege();
				this.state = 1235;
				this.match(CypherParser.SP);
				this.state = 1236;
				this.match(CypherParser.ON);
				this.state = 1237;
				this.match(CypherParser.SP);
				this.state = 1238;
				this.databaseScope();
				this.state = 1239;
				this.match(CypherParser.SP);
				this.state = 1240;
				this.match(CypherParser.TO);
				this.state = 1241;
				this.roles();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1243;
				this.match(CypherParser.DENY);
				this.state = 1244;
				this.match(CypherParser.SP);
				this.state = 1245;
				this.grantableGraphPrivileges();
				this.state = 1246;
				this.match(CypherParser.SP);
				this.state = 1247;
				this.match(CypherParser.ON);
				this.state = 1248;
				this.match(CypherParser.SP);
				this.state = 1249;
				this.graphScope();
				this.state = 1250;
				this.match(CypherParser.SP);
				this.state = 1251;
				this.elementScope();
				this.state = 1252;
				this.match(CypherParser.SP);
				this.state = 1253;
				this.match(CypherParser.TO);
				this.state = 1254;
				this.roles();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1256;
				this.match(CypherParser.DENY);
				this.state = 1257;
				this.match(CypherParser.SP);
				this.state = 1258;
				this.dbmsPrivilege();
				this.state = 1259;
				this.match(CypherParser.SP);
				this.state = 1260;
				this.match(CypherParser.ON);
				this.state = 1261;
				this.match(CypherParser.SP);
				this.state = 1262;
				this.match(CypherParser.DBMS);
				this.state = 1263;
				this.match(CypherParser.SP);
				this.state = 1264;
				this.match(CypherParser.TO);
				this.state = 1265;
				this.roles();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revokePrivilege(): RevokePrivilegeContext {
		let localctx: RevokePrivilegeContext = new RevokePrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, CypherParser.RULE_revokePrivilege);
		let _la: number;
		try {
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1269;
				this.match(CypherParser.REVOKE);
				this.state = 1270;
				this.match(CypherParser.SP);
				this.state = 1271;
				this.match(CypherParser.ROLE);
				this.state = 1272;
				this.match(CypherParser.SP);
				this.state = 1273;
				this.roles();
				this.state = 1274;
				this.match(CypherParser.SP);
				this.state = 1275;
				this.match(CypherParser.FROM);
				this.state = 1276;
				this.match(CypherParser.SP);
				this.state = 1277;
				this.user();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1279;
				this.match(CypherParser.REVOKE);
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1280;
					this.match(CypherParser.SP);
					this.state = 1281;
					_la = this._input.LA(1);
					if(!(_la===159 || _la===160)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1284;
				this.revokePart();
				this.state = 1285;
				this.match(CypherParser.SP);
				this.state = 1286;
				this.match(CypherParser.FROM);
				this.state = 1287;
				this.match(CypherParser.SP);
				this.state = 1288;
				this.roles();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revokePart(): RevokePartContext {
		let localctx: RevokePartContext = new RevokePartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, CypherParser.RULE_revokePart);
		try {
			this.state = 1310;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1292;
				this.datasbasePrivilege();
				this.state = 1293;
				this.match(CypherParser.SP);
				this.state = 1294;
				this.match(CypherParser.ON);
				this.state = 1295;
				this.match(CypherParser.SP);
				this.state = 1296;
				this.databaseScope();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1298;
				this.revokeableGraphPrivileges();
				this.state = 1299;
				this.match(CypherParser.SP);
				this.state = 1300;
				this.match(CypherParser.ON);
				this.state = 1301;
				this.match(CypherParser.SP);
				this.state = 1302;
				this.graphScope();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1304;
				this.dbmsPrivilege();
				this.state = 1305;
				this.match(CypherParser.SP);
				this.state = 1306;
				this.match(CypherParser.ON);
				this.state = 1307;
				this.match(CypherParser.SP);
				this.state = 1308;
				this.match(CypherParser.DBMS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public databaseScope(): DatabaseScopeContext {
		let localctx: DatabaseScopeContext = new DatabaseScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, CypherParser.RULE_databaseScope);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1331;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1312;
				_la = this._input.LA(1);
				if(!(_la===137 || _la===138)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1313;
				this.match(CypherParser.SP);
				this.state = 1314;
				this.match(CypherParser.T__18);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1315;
				_la = this._input.LA(1);
				if(!(_la===137 || _la===138)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1316;
				this.match(CypherParser.SP);
				this.state = 1317;
				this.symbolicName();
				this.state = 1328;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1319;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 1318;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1321;
						this.match(CypherParser.T__14);
						this.state = 1323;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 1322;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1325;
						this.symbolicName();
						}
						}
					}
					this.state = 1330;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphScope(): GraphScopeContext {
		let localctx: GraphScopeContext = new GraphScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, CypherParser.RULE_graphScope);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1352;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1333;
				_la = this._input.LA(1);
				if(!(_la===139 || _la===140)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1334;
				this.match(CypherParser.SP);
				this.state = 1335;
				this.match(CypherParser.T__18);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1336;
				_la = this._input.LA(1);
				if(!(_la===139 || _la===140)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1337;
				this.match(CypherParser.SP);
				this.state = 1338;
				this.symbolicName();
				this.state = 1349;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1340;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 1339;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1342;
						this.match(CypherParser.T__14);
						this.state = 1344;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 1343;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1346;
						this.symbolicName();
						}
						}
					}
					this.state = 1351;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public roles(): RolesContext {
		let localctx: RolesContext = new RolesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, CypherParser.RULE_roles);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1354;
			this.symbolicName();
			this.state = 1365;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1356;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 1355;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1358;
					this.match(CypherParser.T__14);
					this.state = 1360;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 1359;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1362;
					this.symbolicName();
					}
					}
				}
				this.state = 1367;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grantableGraphPrivileges(): GrantableGraphPrivilegesContext {
		let localctx: GrantableGraphPrivilegesContext = new GrantableGraphPrivilegesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, CypherParser.RULE_grantableGraphPrivileges);
		let _la: number;
		try {
			this.state = 1378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 168:
			case 169:
			case 170:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1368;
				this.revokeableGraphPrivileges();
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1369;
				this.match(CypherParser.MATCH);
				this.state = 1370;
				this.match(CypherParser.SP);
				this.state = 1371;
				this.match(CypherParser.T__13);
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1372;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1375;
				this.propertiesList();
				this.state = 1376;
				this.match(CypherParser.T__15);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revokeableGraphPrivileges(): RevokeableGraphPrivilegesContext {
		let localctx: RevokeableGraphPrivilegesContext = new RevokeableGraphPrivilegesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, CypherParser.RULE_revokeableGraphPrivileges);
		let _la: number;
		try {
			this.state = 1391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 168:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1380;
				this.match(CypherParser.TRAVERSE);
				}
				break;
			case 169:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1381;
				this.match(CypherParser.READ);
				this.state = 1382;
				this.match(CypherParser.SP);
				this.state = 1383;
				this.match(CypherParser.T__13);
				this.state = 1385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1384;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1387;
				this.propertiesList();
				this.state = 1388;
				this.match(CypherParser.T__15);
				}
				break;
			case 170:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1390;
				this.match(CypherParser.WRITE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		let localctx: DatasbasePrivilegeContext = new DatasbasePrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, CypherParser.RULE_datasbasePrivilege);
		let _la: number;
		try {
			this.state = 1455;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1393;
				this.match(CypherParser.ACCESS);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1394;
				this.match(CypherParser.START);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1395;
				this.match(CypherParser.STOP);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1396;
				this.match(CypherParser.CREATE);
				this.state = 1397;
				this.match(CypherParser.SP);
				this.state = 1398;
				_la = this._input.LA(1);
				if(!(_la===65 || _la===172)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1399;
				this.match(CypherParser.DROP);
				this.state = 1400;
				this.match(CypherParser.SP);
				this.state = 1401;
				_la = this._input.LA(1);
				if(!(_la===65 || _la===172)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1402;
				_la = this._input.LA(1);
				if(!(_la===65 || _la===172)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1403;
				this.match(CypherParser.SP);
				this.state = 1404;
				this.match(CypherParser.MANAGEMENT);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1405;
				this.match(CypherParser.CREATE);
				this.state = 1406;
				this.match(CypherParser.SP);
				this.state = 1407;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===182)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1408;
				this.match(CypherParser.DROP);
				this.state = 1409;
				this.match(CypherParser.SP);
				this.state = 1410;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===182)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1411;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===182)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1412;
				this.match(CypherParser.SP);
				this.state = 1413;
				this.match(CypherParser.MANAGEMENT);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1414;
				this.match(CypherParser.CREATE);
				this.state = 1415;
				this.match(CypherParser.SP);
				this.state = 1416;
				this.match(CypherParser.NEW);
				this.state = 1417;
				this.match(CypherParser.SP);
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 1418;
					this.match(CypherParser.NODE);
					this.state = 1419;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1422;
				_la = this._input.LA(1);
				if(!(_la===175 || _la===176)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1423;
				this.match(CypherParser.CREATE);
				this.state = 1424;
				this.match(CypherParser.SP);
				this.state = 1425;
				this.match(CypherParser.NEW);
				this.state = 1426;
				this.match(CypherParser.SP);
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103) {
					{
					this.state = 1427;
					this.match(CypherParser.RELATIONSHIP);
					this.state = 1428;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1431;
				_la = this._input.LA(1);
				if(!(_la===179 || _la===180)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1432;
				this.match(CypherParser.CREATE);
				this.state = 1433;
				this.match(CypherParser.SP);
				this.state = 1434;
				this.match(CypherParser.NEW);
				this.state = 1435;
				this.match(CypherParser.SP);
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===181) {
					{
					this.state = 1436;
					this.match(CypherParser.PROPERTY);
					this.state = 1437;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1440;
				_la = this._input.LA(1);
				if(!(_la===177 || _la===178)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1441;
				this.match(CypherParser.NAME);
				this.state = 1444;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1442;
					this.match(CypherParser.SP);
					this.state = 1443;
					this.match(CypherParser.MANAGEMENT);
					}
					break;
				}
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1446;
				this.match(CypherParser.ALL);
				this.state = 1453;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1447;
					this.match(CypherParser.SP);
					this.state = 1450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===137) {
						{
						this.state = 1448;
						this.match(CypherParser.DATABASE);
						this.state = 1449;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1452;
					this.match(CypherParser.PRIVILEGES);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dbmsPrivilege(): DbmsPrivilegeContext {
		let localctx: DbmsPrivilegeContext = new DbmsPrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, CypherParser.RULE_dbmsPrivilege);
		try {
			this.state = 1475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 144:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1457;
				this.match(CypherParser.ROLE);
				this.state = 1458;
				this.match(CypherParser.SP);
				this.state = 1459;
				this.match(CypherParser.MANAGEMENT);
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1460;
				this.match(CypherParser.CREATE);
				this.state = 1461;
				this.match(CypherParser.SP);
				this.state = 1462;
				this.match(CypherParser.ROLE);
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1463;
				this.match(CypherParser.DROP);
				this.state = 1464;
				this.match(CypherParser.SP);
				this.state = 1465;
				this.match(CypherParser.ROLE);
				}
				break;
			case 183:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1466;
				this.match(CypherParser.ASSIGN);
				this.state = 1467;
				this.match(CypherParser.SP);
				this.state = 1468;
				this.match(CypherParser.ROLE);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1469;
				this.match(CypherParser.REMOVE);
				this.state = 1470;
				this.match(CypherParser.SP);
				this.state = 1471;
				this.match(CypherParser.ROLE);
				}
				break;
			case 134:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1472;
				this.match(CypherParser.SHOW);
				this.state = 1473;
				this.match(CypherParser.SP);
				this.state = 1474;
				this.match(CypherParser.ROLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementScope(): ElementScopeContext {
		let localctx: ElementScopeContext = new ElementScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, CypherParser.RULE_elementScope);
		let _la: number;
		try {
			this.state = 1498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
			case 162:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1477;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===162)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1478;
				this.match(CypherParser.SP);
				this.state = 1479;
				this.propertiesList();
				this.state = 1482;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1480;
					this.match(CypherParser.SP);
					this.state = 1481;
					this.propertyScope();
					}
					break;
				}
				}
				break;
			case 102:
			case 163:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1484;
				_la = this._input.LA(1);
				if(!(_la===102 || _la===163)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1485;
				this.match(CypherParser.SP);
				this.state = 1486;
				this.propertiesList();
				this.state = 1489;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1487;
					this.match(CypherParser.SP);
					this.state = 1488;
					this.propertyScope();
					}
					break;
				}
				}
				break;
			case 164:
			case 165:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1491;
				_la = this._input.LA(1);
				if(!(_la===164 || _la===165)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1492;
				this.match(CypherParser.SP);
				this.state = 1493;
				this.propertiesList();
				this.state = 1496;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1494;
					this.match(CypherParser.SP);
					this.state = 1495;
					this.propertyScope();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertiesList(): PropertiesListContext {
		let localctx: PropertiesListContext = new PropertiesListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, CypherParser.RULE_propertiesList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1500;
				this.match(CypherParser.T__18);
				}
				break;
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 206:
			case 215:
			case 218:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1501;
				this.symbolicName();
				this.state = 1512;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1503;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 1502;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1505;
						this.match(CypherParser.T__14);
						this.state = 1507;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 1506;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1509;
						this.symbolicName();
						}
						}
					}
					this.state = 1514;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyScope(): PropertyScopeContext {
		let localctx: PropertyScopeContext = new PropertyScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, CypherParser.RULE_propertyScope);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1517;
			this.match(CypherParser.T__19);
			this.state = 1519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1518;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1521;
			this.match(CypherParser.T__18);
			this.state = 1523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1522;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1525;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showDatabase(): ShowDatabaseContext {
		let localctx: ShowDatabaseContext = new ShowDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, CypherParser.RULE_showDatabase);
		let _la: number;
		try {
			this.state = 1537;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1527;
				this.match(CypherParser.SHOW);
				this.state = 1528;
				this.match(CypherParser.SP);
				this.state = 1531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===135) {
					{
					this.state = 1529;
					this.match(CypherParser.DEFAULT);
					this.state = 1530;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1533;
				this.match(CypherParser.DATABASE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1534;
				this.match(CypherParser.SHOW);
				this.state = 1535;
				this.match(CypherParser.SP);
				this.state = 1536;
				this.match(CypherParser.DATABASES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let localctx: CreateDatabaseContext = new CreateDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, CypherParser.RULE_createDatabase);
		let _la: number;
		try {
			this.state = 1558;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1539;
				this.match(CypherParser.CREATE);
				this.state = 1540;
				this.match(CypherParser.SP);
				this.state = 1541;
				this.match(CypherParser.DATABASE);
				this.state = 1542;
				this.match(CypherParser.SP);
				this.state = 1543;
				this.symbolicName();
				this.state = 1546;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1544;
					this.match(CypherParser.SP);
					this.state = 1545;
					this.ifNotExists();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1548;
				this.match(CypherParser.CREATE);
				this.state = 1549;
				this.match(CypherParser.SP);
				this.state = 1553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 1550;
					this.orReplace();
					this.state = 1551;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1555;
				this.match(CypherParser.DATABASE);
				this.state = 1556;
				this.match(CypherParser.SP);
				this.state = 1557;
				this.symbolicName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let localctx: DropDatabaseContext = new DropDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, CypherParser.RULE_dropDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1560;
			this.match(CypherParser.DROP);
			this.state = 1561;
			this.match(CypherParser.SP);
			this.state = 1562;
			this.match(CypherParser.DATABASE);
			this.state = 1563;
			this.match(CypherParser.SP);
			this.state = 1564;
			this.symbolicName();
			this.state = 1567;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1565;
				this.match(CypherParser.SP);
				this.state = 1566;
				this.ifExists();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startDatabase(): StartDatabaseContext {
		let localctx: StartDatabaseContext = new StartDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, CypherParser.RULE_startDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1569;
			this.match(CypherParser.START);
			this.state = 1570;
			this.match(CypherParser.SP);
			this.state = 1571;
			this.match(CypherParser.DATABASE);
			this.state = 1572;
			this.match(CypherParser.SP);
			this.state = 1573;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stopDatabase(): StopDatabaseContext {
		let localctx: StopDatabaseContext = new StopDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, CypherParser.RULE_stopDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1575;
			this.match(CypherParser.STOP);
			this.state = 1576;
			this.match(CypherParser.SP);
			this.state = 1577;
			this.match(CypherParser.DATABASE);
			this.state = 1578;
			this.match(CypherParser.SP);
			this.state = 1579;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let localctx: IfNotExistsContext = new IfNotExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, CypherParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1581;
			this.match(CypherParser.IF);
			this.state = 1582;
			this.match(CypherParser.SP);
			this.state = 1583;
			this.match(CypherParser.NOT);
			this.state = 1584;
			this.match(CypherParser.SP);
			this.state = 1585;
			this.match(CypherParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let localctx: IfExistsContext = new IfExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, CypherParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1587;
			this.match(CypherParser.IF);
			this.state = 1588;
			this.match(CypherParser.SP);
			this.state = 1589;
			this.match(CypherParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orReplace(): OrReplaceContext {
		let localctx: OrReplaceContext = new OrReplaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, CypherParser.RULE_orReplace);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1591;
			this.match(CypherParser.OR);
			this.state = 1592;
			this.match(CypherParser.SP);
			this.state = 1593;
			this.match(CypherParser.REPLACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setPassword(): SetPasswordContext {
		let localctx: SetPasswordContext = new SetPasswordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, CypherParser.RULE_setPassword);
		try {
			this.state = 1612;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1595;
				this.match(CypherParser.SET);
				this.state = 1596;
				this.match(CypherParser.SP);
				this.state = 1597;
				this.match(CypherParser.PASSWORD);
				this.state = 1598;
				this.match(CypherParser.SP);
				this.state = 1601;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 206:
				case 215:
				case 218:
					{
					this.state = 1599;
					this.password();
					}
					break;
				case 14:
				case 35:
					{
					this.state = 1600;
					this.parameter();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1605;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1603;
					this.match(CypherParser.SP);
					this.state = 1604;
					this.passwordStatus();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1607;
				this.match(CypherParser.SET);
				this.state = 1608;
				this.match(CypherParser.SP);
				this.state = 1609;
				this.match(CypherParser.PASSWORD);
				this.state = 1610;
				this.match(CypherParser.SP);
				this.state = 1611;
				this.passwordStatus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public passwordStatus(): PasswordStatusContext {
		let localctx: PasswordStatusContext = new PasswordStatusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, CypherParser.RULE_passwordStatus);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1614;
			this.match(CypherParser.CHANGE);
			this.state = 1615;
			this.match(CypherParser.SP);
			this.state = 1618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===111) {
				{
				this.state = 1616;
				this.match(CypherParser.NOT);
				this.state = 1617;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1620;
			this.match(CypherParser.REQUIRED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setStatus(): SetStatusContext {
		let localctx: SetStatusContext = new SetStatusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, CypherParser.RULE_setStatus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1622;
			this.match(CypherParser.SET);
			this.state = 1623;
			this.match(CypherParser.SP);
			this.state = 1624;
			this.match(CypherParser.STATUS);
			this.state = 1625;
			this.match(CypherParser.SP);
			this.state = 1626;
			this.userStatus();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userStatus(): UserStatusContext {
		let localctx: UserStatusContext = new UserStatusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, CypherParser.RULE_userStatus);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1628;
			_la = this._input.LA(1);
			if(!(_la===153 || _la===154)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createUniqueConstraint(): CreateUniqueConstraintContext {
		let localctx: CreateUniqueConstraintContext = new CreateUniqueConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, CypherParser.RULE_createUniqueConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1630;
			this.match(CypherParser.CREATE);
			this.state = 1631;
			this.match(CypherParser.SP);
			this.state = 1632;
			this.uniqueConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createNodeKeyConstraint(): CreateNodeKeyConstraintContext {
		let localctx: CreateNodeKeyConstraintContext = new CreateNodeKeyConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, CypherParser.RULE_createNodeKeyConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1634;
			this.match(CypherParser.CREATE);
			this.state = 1635;
			this.match(CypherParser.SP);
			this.state = 1636;
			this.nodeKeyConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createNodePropertyExistenceConstraint(): CreateNodePropertyExistenceConstraintContext {
		let localctx: CreateNodePropertyExistenceConstraintContext = new CreateNodePropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, CypherParser.RULE_createNodePropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1638;
			this.match(CypherParser.CREATE);
			this.state = 1639;
			this.match(CypherParser.SP);
			this.state = 1640;
			this.nodePropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createRelationshipPropertyExistenceConstraint(): CreateRelationshipPropertyExistenceConstraintContext {
		let localctx: CreateRelationshipPropertyExistenceConstraintContext = new CreateRelationshipPropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, CypherParser.RULE_createRelationshipPropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1642;
			this.match(CypherParser.CREATE);
			this.state = 1643;
			this.match(CypherParser.SP);
			this.state = 1644;
			this.relationshipPropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createIndex(): CreateIndexContext {
		let localctx: CreateIndexContext = new CreateIndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, CypherParser.RULE_createIndex);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1646;
			this.match(CypherParser.CREATE);
			this.state = 1647;
			this.match(CypherParser.SP);
			this.state = 1648;
			this.index();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropUniqueConstraint(): DropUniqueConstraintContext {
		let localctx: DropUniqueConstraintContext = new DropUniqueConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, CypherParser.RULE_dropUniqueConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1650;
			this.match(CypherParser.DROP);
			this.state = 1651;
			this.match(CypherParser.SP);
			this.state = 1652;
			this.uniqueConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropNodeKeyConstraint(): DropNodeKeyConstraintContext {
		let localctx: DropNodeKeyConstraintContext = new DropNodeKeyConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, CypherParser.RULE_dropNodeKeyConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1654;
			this.match(CypherParser.DROP);
			this.state = 1655;
			this.match(CypherParser.SP);
			this.state = 1656;
			this.nodeKeyConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropNodePropertyExistenceConstraint(): DropNodePropertyExistenceConstraintContext {
		let localctx: DropNodePropertyExistenceConstraintContext = new DropNodePropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, CypherParser.RULE_dropNodePropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1658;
			this.match(CypherParser.DROP);
			this.state = 1659;
			this.match(CypherParser.SP);
			this.state = 1660;
			this.nodePropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropRelationshipPropertyExistenceConstraint(): DropRelationshipPropertyExistenceConstraintContext {
		let localctx: DropRelationshipPropertyExistenceConstraintContext = new DropRelationshipPropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, CypherParser.RULE_dropRelationshipPropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1662;
			this.match(CypherParser.DROP);
			this.state = 1663;
			this.match(CypherParser.SP);
			this.state = 1664;
			this.relationshipPropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropIndex(): DropIndexContext {
		let localctx: DropIndexContext = new DropIndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, CypherParser.RULE_dropIndex);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1666;
			this.match(CypherParser.DROP);
			this.state = 1667;
			this.match(CypherParser.SP);
			this.state = 1668;
			this.index();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let localctx: IndexContext = new IndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, CypherParser.RULE_index);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1670;
			this.match(CypherParser.INDEX);
			this.state = 1671;
			this.match(CypherParser.SP);
			this.state = 1672;
			this.match(CypherParser.ON);
			this.state = 1674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1673;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1676;
			this.nodeLabel();
			this.state = 1678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1677;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1680;
			this.match(CypherParser.T__19);
			this.state = 1682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1681;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1684;
			this.propertyKeys();
			this.state = 1686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1685;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1688;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uniqueConstraint(): UniqueConstraintContext {
		let localctx: UniqueConstraintContext = new UniqueConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, CypherParser.RULE_uniqueConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1690;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1691;
			this.match(CypherParser.SP);
			this.state = 1692;
			this.match(CypherParser.ON);
			this.state = 1694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1693;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1696;
			this.match(CypherParser.T__19);
			this.state = 1698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1697;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1700;
			this.variable();
			this.state = 1701;
			this.nodeLabel();
			this.state = 1703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1702;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1705;
			this.match(CypherParser.T__20);
			this.state = 1707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1706;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1709;
			this.match(CypherParser.ASSERT);
			this.state = 1710;
			this.match(CypherParser.SP);
			this.state = 1711;
			this.propertyExpression();
			this.state = 1712;
			this.match(CypherParser.SP);
			this.state = 1713;
			this.match(CypherParser.IS);
			this.state = 1714;
			this.match(CypherParser.SP);
			this.state = 1715;
			this.match(CypherParser.UNIQUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeKeyConstraint(): NodeKeyConstraintContext {
		let localctx: NodeKeyConstraintContext = new NodeKeyConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, CypherParser.RULE_nodeKeyConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1717;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1718;
			this.match(CypherParser.SP);
			this.state = 1719;
			this.match(CypherParser.ON);
			this.state = 1721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1720;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1723;
			this.match(CypherParser.T__19);
			this.state = 1725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1724;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1727;
			this.variable();
			this.state = 1728;
			this.nodeLabel();
			this.state = 1730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1729;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1732;
			this.match(CypherParser.T__20);
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1733;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1736;
			this.match(CypherParser.ASSERT);
			this.state = 1737;
			this.match(CypherParser.SP);
			this.state = 1738;
			this.match(CypherParser.T__19);
			this.state = 1740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1739;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1742;
			this.propertyExpressions();
			this.state = 1744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1743;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1746;
			this.match(CypherParser.T__20);
			this.state = 1747;
			this.match(CypherParser.SP);
			this.state = 1748;
			this.match(CypherParser.IS);
			this.state = 1749;
			this.match(CypherParser.SP);
			this.state = 1750;
			this.match(CypherParser.NODE);
			this.state = 1751;
			this.match(CypherParser.SP);
			this.state = 1752;
			this.match(CypherParser.KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodePropertyExistenceConstraint(): NodePropertyExistenceConstraintContext {
		let localctx: NodePropertyExistenceConstraintContext = new NodePropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, CypherParser.RULE_nodePropertyExistenceConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1754;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1755;
			this.match(CypherParser.SP);
			this.state = 1756;
			this.match(CypherParser.ON);
			this.state = 1758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1757;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1760;
			this.match(CypherParser.T__19);
			this.state = 1761;
			this.variable();
			this.state = 1762;
			this.nodeLabel();
			this.state = 1763;
			this.match(CypherParser.T__20);
			this.state = 1765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1764;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1767;
			this.match(CypherParser.ASSERT);
			this.state = 1768;
			this.match(CypherParser.SP);
			this.state = 1769;
			this.match(CypherParser.EXISTS);
			this.state = 1771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1770;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1773;
			this.match(CypherParser.T__19);
			this.state = 1774;
			this.propertyExpression();
			this.state = 1775;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPropertyExistenceConstraint(): RelationshipPropertyExistenceConstraintContext {
		let localctx: RelationshipPropertyExistenceConstraintContext = new RelationshipPropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, CypherParser.RULE_relationshipPropertyExistenceConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1777;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1778;
			this.match(CypherParser.SP);
			this.state = 1779;
			this.match(CypherParser.ON);
			this.state = 1781;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1780;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1783;
			this.relationshipPatternSyntax();
			this.state = 1785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1784;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1787;
			this.match(CypherParser.ASSERT);
			this.state = 1788;
			this.match(CypherParser.SP);
			this.state = 1789;
			this.match(CypherParser.EXISTS);
			this.state = 1791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1790;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1793;
			this.match(CypherParser.T__19);
			this.state = 1794;
			this.propertyExpression();
			this.state = 1795;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPatternSyntax(): RelationshipPatternSyntaxContext {
		let localctx: RelationshipPatternSyntaxContext = new RelationshipPatternSyntaxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, CypherParser.RULE_relationshipPatternSyntax);
		let _la: number;
		try {
			this.state = 1850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1797;
				this.match(CypherParser.T__19);
				this.state = 1799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1798;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1801;
				this.match(CypherParser.T__20);
				this.state = 1802;
				this.dash();
				this.state = 1803;
				this.match(CypherParser.T__16);
				this.state = 1804;
				this.variable();
				this.state = 1805;
				this.relType();
				this.state = 1806;
				this.match(CypherParser.T__17);
				this.state = 1807;
				this.dash();
				this.state = 1808;
				this.match(CypherParser.T__19);
				this.state = 1810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1809;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1812;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1814;
				this.match(CypherParser.T__19);
				this.state = 1816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1815;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1818;
				this.match(CypherParser.T__20);
				this.state = 1819;
				this.dash();
				this.state = 1820;
				this.match(CypherParser.T__16);
				this.state = 1821;
				this.variable();
				this.state = 1822;
				this.relType();
				this.state = 1823;
				this.match(CypherParser.T__17);
				this.state = 1824;
				this.dash();
				this.state = 1825;
				this.rightArrowHead();
				this.state = 1826;
				this.match(CypherParser.T__19);
				this.state = 1828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1827;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1830;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1832;
				this.match(CypherParser.T__19);
				this.state = 1834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1833;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1836;
				this.match(CypherParser.T__20);
				this.state = 1837;
				this.leftArrowHead();
				this.state = 1838;
				this.dash();
				this.state = 1839;
				this.match(CypherParser.T__16);
				this.state = 1840;
				this.variable();
				this.state = 1841;
				this.relType();
				this.state = 1842;
				this.match(CypherParser.T__17);
				this.state = 1843;
				this.dash();
				this.state = 1844;
				this.match(CypherParser.T__19);
				this.state = 1846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1845;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1848;
				this.match(CypherParser.T__20);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loadCSVClause(): LoadCSVClauseContext {
		let localctx: LoadCSVClauseContext = new LoadCSVClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, CypherParser.RULE_loadCSVClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1852;
			this.match(CypherParser.LOAD);
			this.state = 1853;
			this.match(CypherParser.SP);
			this.state = 1854;
			this.match(CypherParser.CSV);
			this.state = 1855;
			this.match(CypherParser.SP);
			this.state = 1860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74) {
				{
				this.state = 1856;
				this.match(CypherParser.WITH);
				this.state = 1857;
				this.match(CypherParser.SP);
				this.state = 1858;
				this.match(CypherParser.HEADERS);
				this.state = 1859;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1862;
			this.match(CypherParser.FROM);
			this.state = 1863;
			this.match(CypherParser.SP);
			this.state = 1864;
			this.expression();
			this.state = 1865;
			this.match(CypherParser.SP);
			this.state = 1866;
			this.match(CypherParser.AS);
			this.state = 1867;
			this.match(CypherParser.SP);
			this.state = 1868;
			this.variable();
			this.state = 1869;
			this.match(CypherParser.SP);
			this.state = 1873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 1870;
				this.match(CypherParser.FIELDTERMINATOR);
				this.state = 1871;
				this.match(CypherParser.SP);
				this.state = 1872;
				this.match(CypherParser.StringLiteral);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchClause(): MatchClauseContext {
		let localctx: MatchClauseContext = new MatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, CypherParser.RULE_matchClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===79) {
				{
				this.state = 1875;
				this.match(CypherParser.OPTIONAL);
				this.state = 1876;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1879;
			this.match(CypherParser.MATCH);
			this.state = 1881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1880;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1883;
			this.pattern();
			this.state = 1887;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1884;
					this.hint();
					}
					}
				}
				this.state = 1889;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			}
			this.state = 1894;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1890;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1893;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unwindClause(): UnwindClauseContext {
		let localctx: UnwindClauseContext = new UnwindClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, CypherParser.RULE_unwindClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1896;
			this.match(CypherParser.UNWIND);
			this.state = 1898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1897;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1900;
			this.expression();
			this.state = 1901;
			this.match(CypherParser.SP);
			this.state = 1902;
			this.match(CypherParser.AS);
			this.state = 1903;
			this.match(CypherParser.SP);
			this.state = 1904;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mergeClause(): MergeClauseContext {
		let localctx: MergeClauseContext = new MergeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, CypherParser.RULE_mergeClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1906;
			this.match(CypherParser.MERGE);
			this.state = 1908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1907;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1910;
			this.patternPart();
			this.state = 1915;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1911;
					this.match(CypherParser.SP);
					this.state = 1912;
					this.mergeAction();
					}
					}
				}
				this.state = 1917;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mergeAction(): MergeActionContext {
		let localctx: MergeActionContext = new MergeActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, CypherParser.RULE_mergeAction);
		try {
			this.state = 1928;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1918;
				this.match(CypherParser.ON);
				this.state = 1919;
				this.match(CypherParser.SP);
				this.state = 1920;
				this.match(CypherParser.MATCH);
				this.state = 1921;
				this.match(CypherParser.SP);
				this.state = 1922;
				this.setClause();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1923;
				this.match(CypherParser.ON);
				this.state = 1924;
				this.match(CypherParser.SP);
				this.state = 1925;
				this.match(CypherParser.CREATE);
				this.state = 1926;
				this.match(CypherParser.SP);
				this.state = 1927;
				this.setClause();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createClause(): CreateClauseContext {
		let localctx: CreateClauseContext = new CreateClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, CypherParser.RULE_createClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1930;
			this.match(CypherParser.CREATE);
			this.state = 1932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1931;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1934;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createUniqueClause(): CreateUniqueClauseContext {
		let localctx: CreateUniqueClauseContext = new CreateUniqueClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, CypherParser.RULE_createUniqueClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1936;
			this.match(CypherParser.CREATE);
			this.state = 1937;
			this.match(CypherParser.SP);
			this.state = 1938;
			this.match(CypherParser.UNIQUE);
			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1939;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1942;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setClause(): SetClauseContext {
		let localctx: SetClauseContext = new SetClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, CypherParser.RULE_setClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1944;
			this.match(CypherParser.SET);
			this.state = 1946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1945;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1948;
			this.setItem();
			this.state = 1959;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1950;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 1949;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1952;
					this.match(CypherParser.T__14);
					this.state = 1954;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 1953;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1956;
					this.setItem();
					}
					}
				}
				this.state = 1961;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setItem(): SetItemContext {
		let localctx: SetItemContext = new SetItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, CypherParser.RULE_setItem);
		let _la: number;
		try {
			this.state = 1998;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1962;
				this.propertyExpression();
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1963;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1966;
				this.match(CypherParser.T__11);
				this.state = 1968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1967;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1970;
				this.expression();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1972;
				this.variable();
				this.state = 1974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1973;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1976;
				this.match(CypherParser.T__11);
				this.state = 1978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1977;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1980;
				this.expression();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1982;
				this.variable();
				this.state = 1984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1983;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1986;
				this.match(CypherParser.T__21);
				this.state = 1988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1987;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1990;
				this.expression();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 1992;
				this.variable();
				this.state = 1994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1993;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1996;
				this.nodeLabels();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public deleteClause(): DeleteClauseContext {
		let localctx: DeleteClauseContext = new DeleteClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, CypherParser.RULE_deleteClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===84) {
				{
				this.state = 2000;
				this.match(CypherParser.DETACH);
				this.state = 2001;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2004;
			this.match(CypherParser.DELETE);
			this.state = 2006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2005;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2008;
			this.expression();
			this.state = 2019;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2009;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2012;
					this.match(CypherParser.T__14);
					this.state = 2014;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2013;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2016;
					this.expression();
					}
					}
				}
				this.state = 2021;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public removeClause(): RemoveClauseContext {
		let localctx: RemoveClauseContext = new RemoveClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, CypherParser.RULE_removeClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2022;
			this.match(CypherParser.REMOVE);
			this.state = 2023;
			this.match(CypherParser.SP);
			this.state = 2024;
			this.removeItem();
			this.state = 2035;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2026;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2025;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2028;
					this.match(CypherParser.T__14);
					this.state = 2030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2029;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2032;
					this.removeItem();
					}
					}
				}
				this.state = 2037;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public removeItem(): RemoveItemContext {
		let localctx: RemoveItemContext = new RemoveItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, CypherParser.RULE_removeItem);
		try {
			this.state = 2042;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2038;
				this.variable();
				this.state = 2039;
				this.nodeLabels();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2041;
				this.propertyExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public foreachClause(): ForeachClauseContext {
		let localctx: ForeachClauseContext = new ForeachClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, CypherParser.RULE_foreachClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2044;
			this.match(CypherParser.FOREACH);
			this.state = 2046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2045;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2048;
			this.match(CypherParser.T__19);
			this.state = 2050;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2049;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2052;
			this.variable();
			this.state = 2053;
			this.match(CypherParser.SP);
			this.state = 2054;
			this.match(CypherParser.IN);
			this.state = 2055;
			this.match(CypherParser.SP);
			this.state = 2056;
			this.expression();
			this.state = 2058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2057;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2060;
			this.match(CypherParser.T__22);
			this.state = 2063;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2061;
					this.match(CypherParser.SP);
					this.state = 2062;
					this.clause();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2065;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2067;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2070;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let localctx: WithClauseContext = new WithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, CypherParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2072;
			this.match(CypherParser.WITH);
			this.state = 2077;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2073;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2076;
				this.match(CypherParser.DISTINCT);
				}
				break;
			}
			this.state = 2079;
			this.match(CypherParser.SP);
			this.state = 2080;
			this.returnBody();
			this.state = 2085;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				{
				this.state = 2082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2081;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2084;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnClause(): ReturnClauseContext {
		let localctx: ReturnClauseContext = new ReturnClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, CypherParser.RULE_returnClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2087;
			this.match(CypherParser.RETURN);
			this.state = 2092;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 2089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2088;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2091;
				this.match(CypherParser.DISTINCT);
				}
				break;
			}
			this.state = 2095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2094;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2097;
			this.returnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnBody(): ReturnBodyContext {
		let localctx: ReturnBodyContext = new ReturnBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, CypherParser.RULE_returnBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2099;
			this.returnItems();
			this.state = 2102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				{
				this.state = 2100;
				this.match(CypherParser.SP);
				this.state = 2101;
				this.order();
				}
				break;
			}
			this.state = 2106;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 2104;
				this.match(CypherParser.SP);
				this.state = 2105;
				this.skip();
				}
				break;
			}
			this.state = 2110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 2108;
				this.match(CypherParser.SP);
				this.state = 2109;
				this.limit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let localctx: FuncContext = new FuncContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, CypherParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2112;
			this.procedureInvocation();
			this.state = 2114;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				this.state = 2113;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===131) {
				{
				this.state = 2116;
				this.procedureResults();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnItems(): ReturnItemsContext {
		let localctx: ReturnItemsContext = new ReturnItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, CypherParser.RULE_returnItems);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2119;
				this.match(CypherParser.T__18);
				this.state = 2130;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2121;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2120;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2123;
						this.match(CypherParser.T__14);
						this.state = 2125;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2124;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2127;
						this.returnItem();
						}
						}
					}
					this.state = 2132;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2133;
				this.returnItem();
				this.state = 2144;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2135;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2134;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2137;
						this.match(CypherParser.T__14);
						this.state = 2139;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2138;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2141;
						this.returnItem();
						}
						}
					}
					this.state = 2146;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
				}
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2147;
				this.func();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnItem(): ReturnItemContext {
		let localctx: ReturnItemContext = new ReturnItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, CypherParser.RULE_returnItem);
		try {
			this.state = 2152;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2150;
				this.asMapping();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2151;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asMapping(): AsMappingContext {
		let localctx: AsMappingContext = new AsMappingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, CypherParser.RULE_asMapping);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2154;
			this.expression();
			this.state = 2155;
			this.match(CypherParser.SP);
			this.state = 2156;
			this.match(CypherParser.AS);
			this.state = 2157;
			this.match(CypherParser.SP);
			this.state = 2158;
			this.variable();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let localctx: CallContext = new CallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, CypherParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2160;
			this.match(CypherParser.CALL);
			this.state = 2161;
			this.match(CypherParser.SP);
			this.state = 2162;
			this.procedureInvocation();
			this.state = 2164;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				{
				this.state = 2163;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===131) {
				{
				this.state = 2166;
				this.procedureResults();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subqueryClause(): SubqueryClauseContext {
		let localctx: SubqueryClauseContext = new SubqueryClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, CypherParser.RULE_subqueryClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2169;
			this.match(CypherParser.CALL);
			this.state = 2171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2170;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2173;
			this.subquery();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subquery(): SubqueryContext {
		let localctx: SubqueryContext = new SubqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, CypherParser.RULE_subquery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2175;
			this.match(CypherParser.T__13);
			this.state = 2177;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 2176;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 1071726625) !== 0) || _la===90 || _la===101 || _la===130) {
				{
				this.state = 2179;
				this.query();
				}
			}

			this.state = 2183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2182;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2185;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureInvocation(): ProcedureInvocationContext {
		let localctx: ProcedureInvocationContext = new ProcedureInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, CypherParser.RULE_procedureInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2187;
			this.procedureInvocationBody();
			this.state = 2189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				this.state = 2188;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 2191;
				this.procedureArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureInvocationBody(): ProcedureInvocationBodyContext {
		let localctx: ProcedureInvocationBodyContext = new ProcedureInvocationBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, CypherParser.RULE_procedureInvocationBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2194;
			this.namespace();
			this.state = 2195;
			this.procedureName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureArguments(): ProcedureArgumentsContext {
		let localctx: ProcedureArgumentsContext = new ProcedureArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, CypherParser.RULE_procedureArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2197;
			this.match(CypherParser.T__19);
			this.state = 2199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 2198;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4293918721) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 4294967295) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4294967295) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4294967295) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 10227519) !== 0)) {
				{
				this.state = 2201;
				this.expression();
				}
			}

			this.state = 2214;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2204;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2207;
					this.match(CypherParser.T__14);
					this.state = 2209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2208;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2211;
					this.expression();
					}
					}
				}
				this.state = 2216;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
			}
			this.state = 2218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2217;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2220;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureResults(): ProcedureResultsContext {
		let localctx: ProcedureResultsContext = new ProcedureResultsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, CypherParser.RULE_procedureResults);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2222;
			this.match(CypherParser.YIELD);
			this.state = 2223;
			this.match(CypherParser.SP);
			this.state = 2224;
			this.procedureResult();
			this.state = 2235;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2225;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2228;
					this.match(CypherParser.T__14);
					this.state = 2230;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2229;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2232;
					this.procedureResult();
					}
					}
				}
				this.state = 2237;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
			}
			this.state = 2240;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				{
				this.state = 2238;
				this.match(CypherParser.SP);
				this.state = 2239;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureResult(): ProcedureResultContext {
		let localctx: ProcedureResultContext = new ProcedureResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, CypherParser.RULE_procedureResult);
		try {
			this.state = 2244;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2242;
				this.aliasedProcedureResult();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2243;
				this.simpleProcedureResult();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasedProcedureResult(): AliasedProcedureResultContext {
		let localctx: AliasedProcedureResultContext = new AliasedProcedureResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, CypherParser.RULE_aliasedProcedureResult);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2246;
			this.procedureOutput();
			this.state = 2247;
			this.match(CypherParser.SP);
			this.state = 2248;
			this.match(CypherParser.AS);
			this.state = 2249;
			this.match(CypherParser.SP);
			this.state = 2250;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleProcedureResult(): SimpleProcedureResultContext {
		let localctx: SimpleProcedureResultContext = new SimpleProcedureResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, CypherParser.RULE_simpleProcedureResult);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2252;
			this.procedureOutput();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureOutput(): ProcedureOutputContext {
		let localctx: ProcedureOutputContext = new ProcedureOutputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, CypherParser.RULE_procedureOutput);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2254;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order(): OrderContext {
		let localctx: OrderContext = new OrderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, CypherParser.RULE_order);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2256;
			this.match(CypherParser.ORDER);
			this.state = 2257;
			this.match(CypherParser.SP);
			this.state = 2258;
			this.match(CypherParser.BY);
			this.state = 2259;
			this.match(CypherParser.SP);
			this.state = 2260;
			this.sortItem();
			this.state = 2271;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 255, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2261;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2264;
					this.match(CypherParser.T__14);
					this.state = 2266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2265;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2268;
					this.sortItem();
					}
					}
				}
				this.state = 2273;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 255, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public skip(): SkipContext {
		let localctx: SkipContext = new SkipContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, CypherParser.RULE_skip);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2274;
			this.match(CypherParser.L_SKIP);
			this.state = 2275;
			this.match(CypherParser.SP);
			this.state = 2276;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limit(): LimitContext {
		let localctx: LimitContext = new LimitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, CypherParser.RULE_limit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2278;
			this.match(CypherParser.LIMIT);
			this.state = 2279;
			this.match(CypherParser.SP);
			this.state = 2280;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let localctx: SortItemContext = new SortItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, CypherParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2282;
			this.expression();
			this.state = 2290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				this.state = 2284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2283;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2286;
				_la = this._input.LA(1);
				if(!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2288;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
				case 1:
					{
					this.state = 2287;
					this.match(CypherParser.SP);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hint(): HintContext {
		let localctx: HintContext = new HintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, CypherParser.RULE_hint);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2292;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2341;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2295;
				this.match(CypherParser.USING);
				this.state = 2296;
				this.match(CypherParser.SP);
				this.state = 2297;
				this.match(CypherParser.INDEX);
				this.state = 2298;
				this.match(CypherParser.SP);
				this.state = 2299;
				this.variable();
				this.state = 2300;
				this.nodeLabel();
				this.state = 2302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2301;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2304;
				this.match(CypherParser.T__19);
				this.state = 2306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2305;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2308;
				this.propertyKeys();
				this.state = 2310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2309;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2312;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 2314;
				this.match(CypherParser.USING);
				this.state = 2315;
				this.match(CypherParser.SP);
				this.state = 2316;
				this.match(CypherParser.JOIN);
				this.state = 2317;
				this.match(CypherParser.SP);
				this.state = 2318;
				this.match(CypherParser.ON);
				this.state = 2319;
				this.match(CypherParser.SP);
				this.state = 2320;
				this.variable();
				this.state = 2331;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2322;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2321;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2324;
						this.match(CypherParser.T__14);
						this.state = 2326;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2325;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2328;
						this.variable();
						}
						}
					}
					this.state = 2333;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
				}
				}
				}
				break;
			case 3:
				{
				{
				this.state = 2334;
				this.match(CypherParser.USING);
				this.state = 2335;
				this.match(CypherParser.SP);
				this.state = 2336;
				this.match(CypherParser.SCAN);
				this.state = 2337;
				this.match(CypherParser.SP);
				this.state = 2338;
				this.variable();
				this.state = 2339;
				this.nodeLabel();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startClause(): StartClauseContext {
		let localctx: StartClauseContext = new StartClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, CypherParser.RULE_startClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2343;
			this.match(CypherParser.START);
			this.state = 2344;
			this.match(CypherParser.SP);
			this.state = 2345;
			this.startPoint();
			this.state = 2356;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2346;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2349;
					this.match(CypherParser.T__14);
					this.state = 2351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2350;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2353;
					this.startPoint();
					}
					}
				}
				this.state = 2358;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
			}
			this.state = 2360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 2359;
				this.where();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startPoint(): StartPointContext {
		let localctx: StartPointContext = new StartPointContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, CypherParser.RULE_startPoint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2362;
			this.variable();
			this.state = 2364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2363;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2366;
			this.match(CypherParser.T__11);
			this.state = 2368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2367;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2370;
			this.lookup();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lookup(): LookupContext {
		let localctx: LookupContext = new LookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, CypherParser.RULE_lookup);
		try {
			this.state = 2374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2372;
				this.nodeLookup();
				}
				break;
			case 103:
			case 104:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2373;
				this.relationshipLookup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeLookup(): NodeLookupContext {
		let localctx: NodeLookupContext = new NodeLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, CypherParser.RULE_nodeLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2376;
			this.match(CypherParser.NODE);
			this.state = 2378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2377;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2383;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 2380;
				this.identifiedIndexLookup();
				}
				break;
			case 2:
				{
				this.state = 2381;
				this.indexQuery();
				}
				break;
			case 3:
				{
				this.state = 2382;
				this.idLookup();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipLookup(): RelationshipLookupContext {
		let localctx: RelationshipLookupContext = new RelationshipLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, CypherParser.RULE_relationshipLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2385;
			_la = this._input.LA(1);
			if(!(_la===103 || _la===104)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2389;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				{
				this.state = 2386;
				this.identifiedIndexLookup();
				}
				break;
			case 2:
				{
				this.state = 2387;
				this.indexQuery();
				}
				break;
			case 3:
				{
				this.state = 2388;
				this.idLookup();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifiedIndexLookup(): IdentifiedIndexLookupContext {
		let localctx: IdentifiedIndexLookupContext = new IdentifiedIndexLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, CypherParser.RULE_identifiedIndexLookup);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2391;
			this.match(CypherParser.T__1);
			this.state = 2392;
			this.symbolicName();
			this.state = 2393;
			this.match(CypherParser.T__19);
			this.state = 2394;
			this.symbolicName();
			this.state = 2395;
			this.match(CypherParser.T__11);
			this.state = 2398;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 200:
				{
				this.state = 2396;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 14:
			case 35:
				{
				this.state = 2397;
				this.parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2400;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexQuery(): IndexQueryContext {
		let localctx: IndexQueryContext = new IndexQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, CypherParser.RULE_indexQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2402;
			this.match(CypherParser.T__1);
			this.state = 2403;
			this.symbolicName();
			this.state = 2404;
			this.match(CypherParser.T__19);
			this.state = 2407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 200:
				{
				this.state = 2405;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 14:
			case 35:
				{
				this.state = 2406;
				this.parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2409;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public idLookup(): IdLookupContext {
		let localctx: IdLookupContext = new IdLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, CypherParser.RULE_idLookup);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2411;
			this.match(CypherParser.T__19);
			this.state = 2415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 203:
			case 204:
			case 205:
				{
				this.state = 2412;
				this.literalIds();
				}
				break;
			case 14:
			case 35:
				{
				this.state = 2413;
				this.parameter();
				}
				break;
			case 19:
				{
				this.state = 2414;
				this.match(CypherParser.T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2417;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literalIds(): LiteralIdsContext {
		let localctx: LiteralIdsContext = new LiteralIdsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, CypherParser.RULE_literalIds);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2419;
			this.integerLiteral();
			this.state = 2430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===219) {
				{
				{
				this.state = 2421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2420;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2423;
				this.match(CypherParser.T__14);
				this.state = 2425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2424;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2427;
				this.integerLiteral();
				}
				}
				this.state = 2432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public where(): WhereContext {
		let localctx: WhereContext = new WhereContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, CypherParser.RULE_where);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2433;
			this.match(CypherParser.WHERE);
			this.state = 2434;
			this.match(CypherParser.SP);
			this.state = 2435;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, CypherParser.RULE_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2437;
			this.patternPart();
			this.state = 2448;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2439;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2438;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2441;
					this.match(CypherParser.T__14);
					this.state = 2443;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2442;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2445;
					this.patternPart();
					}
					}
				}
				this.state = 2450;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternPart(): PatternPartContext {
		let localctx: PatternPartContext = new PatternPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, CypherParser.RULE_patternPart);
		let _la: number;
		try {
			this.state = 2462;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2451;
				this.variable();
				this.state = 2453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2452;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2455;
				this.match(CypherParser.T__11);
				this.state = 2457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2456;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2459;
				this.anonymousPatternPart();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2461;
				this.anonymousPatternPart();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anonymousPatternPart(): AnonymousPatternPartContext {
		let localctx: AnonymousPatternPartContext = new AnonymousPatternPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, CypherParser.RULE_anonymousPatternPart);
		try {
			this.state = 2466;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 106:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2464;
				this.shortestPathPatternFunction();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2465;
				this.patternElement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternElement(): PatternElementContext {
		let localctx: PatternElementContext = new PatternElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, CypherParser.RULE_patternElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2482;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2468;
				this.nodePattern();
				this.state = 2475;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 291, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2470;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2469;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2472;
						this.patternElementChain();
						}
						}
					}
					this.state = 2477;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 291, this._ctx);
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2478;
				this.match(CypherParser.T__19);
				this.state = 2479;
				this.patternElement();
				this.state = 2480;
				this.match(CypherParser.T__20);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodePattern(): NodePatternContext {
		let localctx: NodePatternContext = new NodePatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, CypherParser.RULE_nodePattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2484;
			this.match(CypherParser.T__19);
			this.state = 2486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2485;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 4294967295) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4294967295) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4294967295) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 4294967295) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 8519679) !== 0) || _la===215 || _la===218) {
				{
				this.state = 2488;
				this.variable();
				this.state = 2490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2489;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 2494;
				this.nodeLabels();
				this.state = 2496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2495;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===35) {
				{
				this.state = 2500;
				this.properties();
				this.state = 2502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2501;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2506;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternElementChain(): PatternElementChainContext {
		let localctx: PatternElementChainContext = new PatternElementChainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, CypherParser.RULE_patternElementChain);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2508;
			this.relationshipPattern();
			this.state = 2510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2509;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2512;
			this.nodePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPattern(): RelationshipPatternContext {
		let localctx: RelationshipPatternContext = new RelationshipPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, CypherParser.RULE_relationshipPattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2514;
			this.relationshipPatternStart();
			this.state = 2516;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				{
				this.state = 2515;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 2518;
				this.relationshipDetail();
				}
			}

			this.state = 2522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2521;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2524;
			this.relationshipPatternEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPatternStart(): RelationshipPatternStartContext {
		let localctx: RelationshipPatternStartContext = new RelationshipPatternStartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, CypherParser.RULE_relationshipPatternStart);
		let _la: number;
		try {
			this.state = 2533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
			case 36:
			case 37:
			case 38:
			case 39:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2526;
				this.leftArrowHead();
				this.state = 2528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2527;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2530;
				this.dash();
				}
				}
				break;
			case 3:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2532;
				this.dash();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPatternEnd(): RelationshipPatternEndContext {
		let localctx: RelationshipPatternEndContext = new RelationshipPatternEndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, CypherParser.RULE_relationshipPatternEnd);
		let _la: number;
		try {
			this.state = 2542;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2535;
				this.dash();
				this.state = 2537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2536;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2539;
				this.rightArrowHead();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2541;
				this.dash();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipDetail(): RelationshipDetailContext {
		let localctx: RelationshipDetailContext = new RelationshipDetailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, CypherParser.RULE_relationshipDetail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2544;
			this.match(CypherParser.T__16);
			this.state = 2546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2545;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 4294967295) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4294967295) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4294967295) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 4294967295) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 8519679) !== 0) || _la===215 || _la===218) {
				{
				this.state = 2548;
				this.variable();
				this.state = 2550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2549;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 2554;
				this.relationshipTypes();
				this.state = 2556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2555;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2560;
				this.rangeLiteral();
				}
			}

			this.state = 2567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===35) {
				{
				this.state = 2563;
				this.properties();
				this.state = 2565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2564;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2569;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public properties(): PropertiesContext {
		let localctx: PropertiesContext = new PropertiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, CypherParser.RULE_properties);
		try {
			this.state = 2573;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2571;
				this.mapLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2572;
				this.parameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relType(): RelTypeContext {
		let localctx: RelTypeContext = new RelTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, CypherParser.RULE_relType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2575;
			this.match(CypherParser.T__1);
			this.state = 2577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2576;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2579;
			this.relTypeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipTypeTermAtom(): RelationshipTypeTermAtomContext {
		let localctx: RelationshipTypeTermAtomContext = new RelationshipTypeTermAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, CypherParser.RULE_relationshipTypeTermAtom);
		try {
			this.state = 2583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2581;
				this.parenthesizedRelationshipTypeTerm();
				}
				break;
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 206:
			case 215:
			case 218:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2582;
				this.relTypeName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipTypeTerm(): RelationshipTypeTermContext {
		let localctx: RelationshipTypeTermContext = new RelationshipTypeTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, CypherParser.RULE_relationshipTypeTerm);
		try {
			this.state = 2589;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 319, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2585;
				this.relTypeName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2586;
				this.orRelationshipTypeTerm();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2587;
				this.wildcardRelationshipType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2588;
				this.parenthesizedRelationshipTypeTerm();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcardRelationshipType(): WildcardRelationshipTypeContext {
		let localctx: WildcardRelationshipTypeContext = new WildcardRelationshipTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, CypherParser.RULE_wildcardRelationshipType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2591;
			this.match(CypherParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orRelationshipTypeTerm(): OrRelationshipTypeTermContext {
		let localctx: OrRelationshipTypeTermContext = new OrRelationshipTypeTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, CypherParser.RULE_orRelationshipTypeTerm);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2593;
			this.andRelationshipTypeTerm();
			this.state = 2604;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 322, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2594;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2597;
					this.match(CypherParser.T__22);
					this.state = 2599;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
					case 1:
						{
						this.state = 2598;
						this.match(CypherParser.SP);
						}
						break;
					}
					this.state = 2601;
					this.andRelationshipTypeTerm();
					}
					}
				}
				this.state = 2606;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 322, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andRelationshipTypeTerm(): AndRelationshipTypeTermContext {
		let localctx: AndRelationshipTypeTermContext = new AndRelationshipTypeTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, CypherParser.RULE_andRelationshipTypeTerm);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2607;
			this.notRelationshipTypeTerm();
			this.state = 2618;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 325, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2609;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2608;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2611;
					this.match(CypherParser.T__10);
					this.state = 2613;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
					case 1:
						{
						this.state = 2612;
						this.match(CypherParser.SP);
						}
						break;
					}
					this.state = 2615;
					this.notRelationshipTypeTerm();
					}
					}
				}
				this.state = 2620;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 325, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notRelationshipTypeTerm(): NotRelationshipTypeTermContext {
		let localctx: NotRelationshipTypeTermContext = new NotRelationshipTypeTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, CypherParser.RULE_notRelationshipTypeTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 2621;
				this.inversionToken();
				}
				}
				this.state = 2626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2627;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2630;
			this.relationshipTypeTermAtom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parenthesizedRelationshipTypeTerm(): ParenthesizedRelationshipTypeTermContext {
		let localctx: ParenthesizedRelationshipTypeTermContext = new ParenthesizedRelationshipTypeTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, CypherParser.RULE_parenthesizedRelationshipTypeTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2632;
			this.match(CypherParser.T__19);
			this.state = 2634;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				{
				this.state = 2633;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2636;
			this.relationshipTypeTerm();
			this.state = 2638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2637;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2640;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipTypes(): RelationshipTypesContext {
		let localctx: RelationshipTypesContext = new RelationshipTypesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, CypherParser.RULE_relationshipTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2642;
			this.relationshipType();
			this.state = 2650;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 331, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2643;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2646;
					this.match(CypherParser.T__22);
					this.state = 2647;
					this.relationshipTypeOptionalColon();
					}
					}
				}
				this.state = 2652;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 331, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipType(): RelationshipTypeContext {
		let localctx: RelationshipTypeContext = new RelationshipTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, CypherParser.RULE_relationshipType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2653;
			this.match(CypherParser.T__1);
			this.state = 2654;
			this.relationshipTypeTerm();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inversionToken(): InversionTokenContext {
		let localctx: InversionTokenContext = new InversionTokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, CypherParser.RULE_inversionToken);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2656;
			this.match(CypherParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipTypeOptionalColon(): RelationshipTypeOptionalColonContext {
		let localctx: RelationshipTypeOptionalColonContext = new RelationshipTypeOptionalColonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, CypherParser.RULE_relationshipTypeOptionalColon);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 2658;
				this.match(CypherParser.T__1);
				}
			}

			this.state = 2661;
			this.relTypeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeLabels(): NodeLabelsContext {
		let localctx: NodeLabelsContext = new NodeLabelsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, CypherParser.RULE_nodeLabels);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2663;
			this.nodeLabel();
			this.state = 2670;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 334, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2665;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2664;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2667;
					this.nodeLabel();
					}
					}
				}
				this.state = 2672;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 334, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeLabel(): NodeLabelContext {
		let localctx: NodeLabelContext = new NodeLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, CypherParser.RULE_nodeLabel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2673;
			this.match(CypherParser.T__1);
			this.state = 2674;
			this.labelTerm();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelAtom(): LabelAtomContext {
		let localctx: LabelAtomContext = new LabelAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, CypherParser.RULE_labelAtom);
		try {
			this.state = 2678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2676;
				this.parenthesizedLabelTerm();
				}
				break;
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 206:
			case 215:
			case 218:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2677;
				this.labelName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelTerm(): LabelTermContext {
		let localctx: LabelTermContext = new LabelTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, CypherParser.RULE_labelTerm);
		try {
			this.state = 2684;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 336, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2680;
				this.labelName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2681;
				this.orLabelTerm();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2682;
				this.wildcardLabel();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2683;
				this.parenthesizedLabelTerm();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcardLabel(): WildcardLabelContext {
		let localctx: WildcardLabelContext = new WildcardLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, CypherParser.RULE_wildcardLabel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2686;
			this.match(CypherParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orLabelTerm(): OrLabelTermContext {
		let localctx: OrLabelTermContext = new OrLabelTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, CypherParser.RULE_orLabelTerm);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2688;
			this.andLabelTerm();
			this.state = 2699;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 339, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2689;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2692;
					this.match(CypherParser.T__22);
					this.state = 2694;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 338, this._ctx) ) {
					case 1:
						{
						this.state = 2693;
						this.match(CypherParser.SP);
						}
						break;
					}
					this.state = 2696;
					this.andLabelTerm();
					}
					}
				}
				this.state = 2701;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 339, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andLabelTerm(): AndLabelTermContext {
		let localctx: AndLabelTermContext = new AndLabelTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, CypherParser.RULE_andLabelTerm);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2702;
			this.notLabelTerm();
			this.state = 2713;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 342, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2703;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2706;
					this.match(CypherParser.T__10);
					this.state = 2708;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 341, this._ctx) ) {
					case 1:
						{
						this.state = 2707;
						this.match(CypherParser.SP);
						}
						break;
					}
					this.state = 2710;
					this.notLabelTerm();
					}
					}
				}
				this.state = 2715;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 342, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notLabelTerm(): NotLabelTermContext {
		let localctx: NotLabelTermContext = new NotLabelTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, CypherParser.RULE_notLabelTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 2716;
				this.inversionToken();
				}
				}
				this.state = 2721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2722;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2725;
			this.labelAtom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parenthesizedLabelTerm(): ParenthesizedLabelTermContext {
		let localctx: ParenthesizedLabelTermContext = new ParenthesizedLabelTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, CypherParser.RULE_parenthesizedLabelTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2727;
			this.match(CypherParser.T__19);
			this.state = 2729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 345, this._ctx) ) {
			case 1:
				{
				this.state = 2728;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2731;
			this.labelTerm();
			this.state = 2733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2732;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2735;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeLiteral(): RangeLiteralContext {
		let localctx: RangeLiteralContext = new RangeLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 366, CypherParser.RULE_rangeLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2737;
			this.match(CypherParser.T__18);
			this.state = 2739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2738;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 7) !== 0)) {
				{
				this.state = 2741;
				this.integerLiteral();
				this.state = 2743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2742;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 2747;
				this.match(CypherParser.T__25);
				this.state = 2749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2748;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 7) !== 0)) {
					{
					this.state = 2751;
					this.integerLiteral();
					this.state = 2753;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2752;
						this.match(CypherParser.SP);
						}
					}

					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelName(): LabelNameContext {
		let localctx: LabelNameContext = new LabelNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 368, CypherParser.RULE_labelName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2759;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relTypeName(): RelTypeNameContext {
		let localctx: RelTypeNameContext = new RelTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, CypherParser.RULE_relTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2761;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, CypherParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2763;
			this.orExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public existsSubQuery(): ExistsSubQueryContext {
		let localctx: ExistsSubQueryContext = new ExistsSubQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, CypherParser.RULE_existsSubQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2765;
			this.match(CypherParser.EXISTS);
			this.state = 2767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2766;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2769;
			this.existsSubQueryBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public existsSubQueryBody(): ExistsSubQueryBodyContext {
		let localctx: ExistsSubQueryBodyContext = new ExistsSubQueryBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, CypherParser.RULE_existsSubQueryBody);
		try {
			this.state = 2773;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 355, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2771;
				this.subquery();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2772;
				this.subqueryPatternBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subqueryPatternBody(): SubqueryPatternBodyContext {
		let localctx: SubqueryPatternBodyContext = new SubqueryPatternBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, CypherParser.RULE_subqueryPatternBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2775;
			this.match(CypherParser.T__13);
			this.state = 2777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2776;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2779;
			this.pattern();
			this.state = 2783;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 357, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2780;
					this.hint();
					}
					}
				}
				this.state = 2785;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 357, this._ctx);
			}
			this.state = 2790;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 359, this._ctx) ) {
			case 1:
				{
				this.state = 2787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2786;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2789;
				this.where();
				}
				break;
			}
			this.state = 2793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2792;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2795;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orExpression(): OrExpressionContext {
		let localctx: OrExpressionContext = new OrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 380, CypherParser.RULE_orExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2797;
			this.xorExpression();
			this.state = 2804;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 361, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2798;
					this.match(CypherParser.SP);
					this.state = 2799;
					this.match(CypherParser.OR);
					this.state = 2800;
					this.match(CypherParser.SP);
					this.state = 2801;
					this.xorExpression();
					}
					}
				}
				this.state = 2806;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 361, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xorExpression(): XorExpressionContext {
		let localctx: XorExpressionContext = new XorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 382, CypherParser.RULE_xorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2807;
			this.andExpression();
			this.state = 2814;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 362, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2808;
					this.match(CypherParser.SP);
					this.state = 2809;
					this.match(CypherParser.XOR);
					this.state = 2810;
					this.match(CypherParser.SP);
					this.state = 2811;
					this.andExpression();
					}
					}
				}
				this.state = 2816;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 362, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 384, CypherParser.RULE_andExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2817;
			this.notExpression();
			this.state = 2824;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2818;
					this.match(CypherParser.SP);
					this.state = 2819;
					this.match(CypherParser.AND);
					this.state = 2820;
					this.match(CypherParser.SP);
					this.state = 2821;
					this.notExpression();
					}
					}
				}
				this.state = 2826;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notExpression(): NotExpressionContext {
		let localctx: NotExpressionContext = new NotExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, CypherParser.RULE_notExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2833;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2827;
					this.match(CypherParser.NOT);
					this.state = 2829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2828;
						this.match(CypherParser.SP);
						}
					}

					}
					}
				}
				this.state = 2835;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
			}
			this.state = 2836;
			this.comparisonExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonExpression(): ComparisonExpressionContext {
		let localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 388, CypherParser.RULE_comparisonExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2838;
			this.addOrSubtractExpression();
			this.state = 2845;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 367, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2839;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2842;
					this.partialComparisonExpression();
					}
					}
				}
				this.state = 2847;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 367, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addOrSubtractExpression(): AddOrSubtractExpressionContext {
		let localctx: AddOrSubtractExpressionContext = new AddOrSubtractExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 390, CypherParser.RULE_addOrSubtractExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2848;
			this.multiplyDivideModuloExpression();
			this.state = 2867;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 373, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2865;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
					case 1:
						{
						{
						this.state = 2850;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2849;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2852;
						this.match(CypherParser.T__12);
						this.state = 2854;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2853;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2856;
						this.multiplyDivideModuloExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 2858;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2857;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2860;
						this.match(CypherParser.T__2);
						this.state = 2862;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2861;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2864;
						this.multiplyDivideModuloExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 2869;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 373, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplyDivideModuloExpression(): MultiplyDivideModuloExpressionContext {
		let localctx: MultiplyDivideModuloExpressionContext = new MultiplyDivideModuloExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 392, CypherParser.RULE_multiplyDivideModuloExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2870;
			this.powerOfExpression();
			this.state = 2897;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 381, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2895;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
					case 1:
						{
						{
						this.state = 2872;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2871;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2874;
						this.match(CypherParser.T__18);
						this.state = 2876;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2875;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2878;
						this.powerOfExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 2880;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2879;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2882;
						this.match(CypherParser.T__5);
						this.state = 2884;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2883;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2886;
						this.powerOfExpression();
						}
						}
						break;
					case 3:
						{
						{
						this.state = 2888;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2887;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2890;
						this.match(CypherParser.T__23);
						this.state = 2892;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2891;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2894;
						this.powerOfExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 2899;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 381, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public powerOfExpression(): PowerOfExpressionContext {
		let localctx: PowerOfExpressionContext = new PowerOfExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 394, CypherParser.RULE_powerOfExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2900;
			this.unaryAddOrSubtractExpression();
			this.state = 2911;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 384, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2902;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2901;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2904;
					this.match(CypherParser.T__26);
					this.state = 2906;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2905;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2908;
					this.unaryAddOrSubtractExpression();
					}
					}
				}
				this.state = 2913;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 384, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryAddOrSubtractExpression(): UnaryAddOrSubtractExpressionContext {
		let localctx: UnaryAddOrSubtractExpressionContext = new UnaryAddOrSubtractExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 396, CypherParser.RULE_unaryAddOrSubtractExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3 || _la===13) {
				{
				{
				this.state = 2914;
				_la = this._input.LA(1);
				if(!(_la===3 || _la===13)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 2915;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 2922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2923;
			this.stringListNullOperatorExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringListNullOperatorExpression(): StringListNullOperatorExpressionContext {
		let localctx: StringListNullOperatorExpressionContext = new StringListNullOperatorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 398, CypherParser.RULE_stringListNullOperatorExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2925;
			this.propertyOrLabelsExpression();
			this.state = 2979;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 395, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2977;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 394, this._ctx) ) {
					case 1:
						{
						{
						this.state = 2927;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2926;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2929;
						this.match(CypherParser.T__16);
						this.state = 2930;
						this.expression();
						this.state = 2931;
						this.match(CypherParser.T__17);
						}
						}
						break;
					case 2:
						{
						{
						this.state = 2934;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2933;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2936;
						this.match(CypherParser.T__16);
						this.state = 2938;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4293918721) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 4294967295) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4294967295) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4294967295) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 10227519) !== 0)) {
							{
							this.state = 2937;
							this.expression();
							}
						}

						this.state = 2940;
						this.match(CypherParser.T__25);
						this.state = 2942;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4293918721) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 4294967295) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4294967295) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4294967295) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 10227519) !== 0)) {
							{
							this.state = 2941;
							this.expression();
							}
						}

						this.state = 2944;
						this.match(CypherParser.T__17);
						}
						}
						break;
					case 3:
						{
						{
						this.state = 2961;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 392, this._ctx) ) {
						case 1:
							{
							{
							this.state = 2946;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===219) {
								{
								this.state = 2945;
								this.match(CypherParser.SP);
								}
							}

							this.state = 2948;
							this.match(CypherParser.T__27);
							}
							}
							break;
						case 2:
							{
							{
							this.state = 2949;
							this.match(CypherParser.SP);
							this.state = 2950;
							this.match(CypherParser.IN);
							}
							}
							break;
						case 3:
							{
							{
							this.state = 2951;
							this.match(CypherParser.SP);
							this.state = 2952;
							this.match(CypherParser.STARTS);
							this.state = 2953;
							this.match(CypherParser.SP);
							this.state = 2954;
							this.match(CypherParser.WITH);
							}
							}
							break;
						case 4:
							{
							{
							this.state = 2955;
							this.match(CypherParser.SP);
							this.state = 2956;
							this.match(CypherParser.ENDS);
							this.state = 2957;
							this.match(CypherParser.SP);
							this.state = 2958;
							this.match(CypherParser.WITH);
							}
							}
							break;
						case 5:
							{
							{
							this.state = 2959;
							this.match(CypherParser.SP);
							this.state = 2960;
							this.match(CypherParser.CONTAINS);
							}
							}
							break;
						}
						this.state = 2964;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 2963;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2966;
						this.propertyOrLabelsExpression();
						}
						}
						break;
					case 4:
						{
						{
						this.state = 2967;
						this.match(CypherParser.SP);
						this.state = 2968;
						this.match(CypherParser.IS);
						this.state = 2969;
						this.match(CypherParser.SP);
						this.state = 2970;
						this.match(CypherParser.NULL);
						}
						}
						break;
					case 5:
						{
						{
						this.state = 2971;
						this.match(CypherParser.SP);
						this.state = 2972;
						this.match(CypherParser.IS);
						this.state = 2973;
						this.match(CypherParser.SP);
						this.state = 2974;
						this.match(CypherParser.NOT);
						this.state = 2975;
						this.match(CypherParser.SP);
						this.state = 2976;
						this.match(CypherParser.NULL);
						}
						}
						break;
					}
					}
				}
				this.state = 2981;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 395, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyOrLabelsExpression(): PropertyOrLabelsExpressionContext {
		let localctx: PropertyOrLabelsExpressionContext = new PropertyOrLabelsExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 400, CypherParser.RULE_propertyOrLabelsExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2982;
			this.atom();
			this.state = 2992;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 398, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2984;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 2983;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2988;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 7:
						{
						this.state = 2986;
						this.propertyLookup();
						}
						break;
					case 2:
						{
						this.state = 2987;
						this.nodeLabels();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 2994;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 398, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterFunction(): FilterFunctionContext {
		let localctx: FilterFunctionContext = new FilterFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 402, CypherParser.RULE_filterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2995;
			this.filterFunctionName();
			this.state = 2997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2996;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2999;
			this.match(CypherParser.T__19);
			this.state = 3001;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3000;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3003;
			this.filterExpression();
			this.state = 3005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3004;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3007;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterFunctionName(): FilterFunctionNameContext {
		let localctx: FilterFunctionNameContext = new FilterFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 404, CypherParser.RULE_filterFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3009;
			this.match(CypherParser.FILTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public existsFunction(): ExistsFunctionContext {
		let localctx: ExistsFunctionContext = new ExistsFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 406, CypherParser.RULE_existsFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3011;
			this.existsFunctionName();
			this.state = 3013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3012;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3015;
			this.match(CypherParser.T__19);
			this.state = 3017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3016;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3019;
			this.expression();
			this.state = 3021;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3020;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3023;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public existsFunctionName(): ExistsFunctionNameContext {
		let localctx: ExistsFunctionNameContext = new ExistsFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 408, CypherParser.RULE_existsFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3025;
			this.match(CypherParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allFunction(): AllFunctionContext {
		let localctx: AllFunctionContext = new AllFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 410, CypherParser.RULE_allFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3027;
			this.allFunctionName();
			this.state = 3029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3028;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3031;
			this.match(CypherParser.T__19);
			this.state = 3033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3032;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3035;
			this.filterExpression();
			this.state = 3037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3036;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3039;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allFunctionName(): AllFunctionNameContext {
		let localctx: AllFunctionNameContext = new AllFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 412, CypherParser.RULE_allFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3041;
			this.match(CypherParser.ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anyFunction(): AnyFunctionContext {
		let localctx: AnyFunctionContext = new AnyFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 414, CypherParser.RULE_anyFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3043;
			this.anyFunctionName();
			this.state = 3045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3044;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3047;
			this.match(CypherParser.T__19);
			this.state = 3049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3048;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3051;
			this.filterExpression();
			this.state = 3053;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3052;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3055;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anyFunctionName(): AnyFunctionNameContext {
		let localctx: AnyFunctionNameContext = new AnyFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 416, CypherParser.RULE_anyFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3057;
			this.match(CypherParser.ANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noneFunction(): NoneFunctionContext {
		let localctx: NoneFunctionContext = new NoneFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 418, CypherParser.RULE_noneFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3059;
			this.noneFunctionName();
			this.state = 3061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3060;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3063;
			this.match(CypherParser.T__19);
			this.state = 3065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3064;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3067;
			this.filterExpression();
			this.state = 3069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3068;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3071;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noneFunctionName(): NoneFunctionNameContext {
		let localctx: NoneFunctionNameContext = new NoneFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 420, CypherParser.RULE_noneFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3073;
			this.match(CypherParser.NONE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleFunction(): SingleFunctionContext {
		let localctx: SingleFunctionContext = new SingleFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 422, CypherParser.RULE_singleFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3075;
			this.singleFunctionName();
			this.state = 3077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3076;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3079;
			this.match(CypherParser.T__19);
			this.state = 3081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3080;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3083;
			this.filterExpression();
			this.state = 3085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3084;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3087;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleFunctionName(): SingleFunctionNameContext {
		let localctx: SingleFunctionNameContext = new SingleFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 424, CypherParser.RULE_singleFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3089;
			this.match(CypherParser.SINGLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extractFunction(): ExtractFunctionContext {
		let localctx: ExtractFunctionContext = new ExtractFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 426, CypherParser.RULE_extractFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3091;
			this.extractFunctionName();
			this.state = 3093;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3092;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3095;
			this.match(CypherParser.T__19);
			this.state = 3097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3096;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3099;
			this.filterExpression();
			this.state = 3108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 421, this._ctx) ) {
			case 1:
				{
				this.state = 3101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3100;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3103;
				this.match(CypherParser.T__22);
				this.state = 3105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3104;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3107;
				this.expression();
				}
				break;
			}
			this.state = 3111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3110;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3113;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extractFunctionName(): ExtractFunctionNameContext {
		let localctx: ExtractFunctionNameContext = new ExtractFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 428, CypherParser.RULE_extractFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3115;
			this.match(CypherParser.EXTRACT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceFunction(): ReduceFunctionContext {
		let localctx: ReduceFunctionContext = new ReduceFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 430, CypherParser.RULE_reduceFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 3117;
			this.reduceFunctionName();
			this.state = 3119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3118;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3121;
			this.match(CypherParser.T__19);
			this.state = 3123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3122;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3125;
			this.variable();
			this.state = 3127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3126;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3129;
			this.match(CypherParser.T__11);
			this.state = 3131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3130;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3133;
			this.expression();
			this.state = 3135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3134;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3137;
			this.match(CypherParser.T__14);
			this.state = 3139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3138;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3141;
			this.idInColl();
			this.state = 3143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3142;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3145;
			this.match(CypherParser.T__22);
			this.state = 3147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3146;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3149;
			this.expression();
			this.state = 3151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3150;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3153;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceFunctionName(): ReduceFunctionNameContext {
		let localctx: ReduceFunctionNameContext = new ReduceFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 432, CypherParser.RULE_reduceFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3155;
			this.match(CypherParser.REDUCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shortestPathPatternFunction(): ShortestPathPatternFunctionContext {
		let localctx: ShortestPathPatternFunctionContext = new ShortestPathPatternFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 434, CypherParser.RULE_shortestPathPatternFunction);
		let _la: number;
		try {
			this.state = 3185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 106:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 3157;
				this.shortestPathFunctionName();
				this.state = 3159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3158;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3161;
				this.match(CypherParser.T__19);
				this.state = 3163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3162;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3165;
				this.patternElement();
				this.state = 3167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3166;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3169;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 107:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 3171;
				this.allShortestPathFunctionName();
				this.state = 3173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3172;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3175;
				this.match(CypherParser.T__19);
				this.state = 3177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3176;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3179;
				this.patternElement();
				this.state = 3181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3180;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3183;
				this.match(CypherParser.T__20);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shortestPathFunctionName(): ShortestPathFunctionNameContext {
		let localctx: ShortestPathFunctionNameContext = new ShortestPathFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 436, CypherParser.RULE_shortestPathFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3187;
			this.match(CypherParser.SHORTESTPATH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allShortestPathFunctionName(): AllShortestPathFunctionNameContext {
		let localctx: AllShortestPathFunctionNameContext = new AllShortestPathFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 438, CypherParser.RULE_allShortestPathFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3189;
			this.match(CypherParser.ALLSHORTESTPATHS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 440, CypherParser.RULE_atom);
		let _la: number;
		try {
			this.state = 3223;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 442, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3191;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3192;
				this.parameter();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3193;
				this.caseExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 3194;
				this.match(CypherParser.COUNT);
				this.state = 3196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3195;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3198;
				this.match(CypherParser.T__19);
				this.state = 3200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3199;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3202;
				this.match(CypherParser.T__18);
				this.state = 3204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3203;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3206;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 3207;
				this.listComprehension();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 3208;
				this.patternComprehension();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 3209;
				this.filterFunction();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 3210;
				this.extractFunction();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 3211;
				this.reduceFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 3212;
				this.allFunction();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 3213;
				this.anyFunction();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 3214;
				this.noneFunction();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 3215;
				this.singleFunction();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 3216;
				this.existsFunction();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 3217;
				this.shortestPathPatternFunction();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 3218;
				this.relationshipsPattern();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 3219;
				this.parenthesizedExpression();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 3220;
				this.functionInvocation();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 3221;
				this.existsSubQuery();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 3222;
				this.variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 442, CypherParser.RULE_literal);
		try {
			this.state = 3232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 443, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3225;
				this.numberLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3226;
				this.stringLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3227;
				this.booleanLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 3228;
				this.match(CypherParser.NULL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 3229;
				this.mapLiteral();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 3230;
				this.listLiteral();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 3231;
				this.mapProjection();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 444, CypherParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3234;
			this.match(CypherParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 446, CypherParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3236;
			_la = this._input.LA(1);
			if(!(_la===122 || _la===123)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listLiteral(): ListLiteralContext {
		let localctx: ListLiteralContext = new ListLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 448, CypherParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3238;
			this.match(CypherParser.T__16);
			this.state = 3240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3239;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4293918721) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 4294967295) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4294967295) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4294967295) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 10227519) !== 0)) {
				{
				this.state = 3242;
				this.expression();
				this.state = 3244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3243;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 3246;
					this.match(CypherParser.T__14);
					this.state = 3248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3247;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3250;
					this.expression();
					this.state = 3252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3251;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 3258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 3261;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partialComparisonExpression(): PartialComparisonExpressionContext {
		let localctx: PartialComparisonExpressionContext = new PartialComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 450, CypherParser.RULE_partialComparisonExpression);
		let _la: number;
		try {
			this.state = 3298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 3263;
				this.match(CypherParser.T__11);
				this.state = 3265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3264;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3267;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 3268;
				this.match(CypherParser.T__28);
				this.state = 3270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3269;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3272;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 3273;
				this.match(CypherParser.T__29);
				this.state = 3275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3274;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3277;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 3278;
				this.match(CypherParser.T__30);
				this.state = 3280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3279;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3282;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 5);
				{
				{
				this.state = 3283;
				this.match(CypherParser.T__31);
				this.state = 3285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3284;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3287;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 6);
				{
				{
				this.state = 3288;
				this.match(CypherParser.T__32);
				this.state = 3290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3289;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3292;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 7);
				{
				{
				this.state = 3293;
				this.match(CypherParser.T__33);
				this.state = 3295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3294;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3297;
				this.addOrSubtractExpression();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		let localctx: ParenthesizedExpressionContext = new ParenthesizedExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 452, CypherParser.RULE_parenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3300;
			this.match(CypherParser.T__19);
			this.state = 3302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3301;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3304;
			this.expression();
			this.state = 3306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3305;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3308;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipsPattern(): RelationshipsPatternContext {
		let localctx: RelationshipsPatternContext = new RelationshipsPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 454, CypherParser.RULE_relationshipsPattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3310;
			this.nodePattern();
			this.state = 3315;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3311;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3314;
					this.patternElementChain();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3317;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 461, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterExpression(): FilterExpressionContext {
		let localctx: FilterExpressionContext = new FilterExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 456, CypherParser.RULE_filterExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3319;
			this.idInColl();
			this.state = 3324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 463, this._ctx) ) {
			case 1:
				{
				this.state = 3321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3320;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3323;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public idInColl(): IdInCollContext {
		let localctx: IdInCollContext = new IdInCollContext(this, this._ctx, this.state);
		this.enterRule(localctx, 458, CypherParser.RULE_idInColl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3326;
			this.variable();
			this.state = 3327;
			this.match(CypherParser.SP);
			this.state = 3328;
			this.match(CypherParser.IN);
			this.state = 3329;
			this.match(CypherParser.SP);
			this.state = 3330;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionInvocation(): FunctionInvocationContext {
		let localctx: FunctionInvocationContext = new FunctionInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 460, CypherParser.RULE_functionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3332;
			this.functionInvocationBody();
			this.state = 3334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3333;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3336;
			this.match(CypherParser.T__19);
			this.state = 3338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3337;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3344;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 467, this._ctx) ) {
			case 1:
				{
				this.state = 3340;
				this.match(CypherParser.DISTINCT);
				this.state = 3342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3341;
					this.match(CypherParser.SP);
					}
				}

				}
				break;
			}
			this.state = 3363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4293918721) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 4294967295) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4294967295) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4294967295) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 10227519) !== 0)) {
				{
				this.state = 3346;
				this.expression();
				this.state = 3348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3347;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 3350;
					this.match(CypherParser.T__14);
					this.state = 3352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3351;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3354;
					this.expression();
					this.state = 3356;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3355;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 3362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 3365;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionInvocationBody(): FunctionInvocationBodyContext {
		let localctx: FunctionInvocationBodyContext = new FunctionInvocationBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 462, CypherParser.RULE_functionInvocationBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3367;
			this.namespace();
			this.state = 3368;
			this.functionName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 464, CypherParser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3370;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureName(): ProcedureNameContext {
		let localctx: ProcedureNameContext = new ProcedureNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 466, CypherParser.RULE_procedureName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3372;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listComprehension(): ListComprehensionContext {
		let localctx: ListComprehensionContext = new ListComprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 468, CypherParser.RULE_listComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3374;
			this.match(CypherParser.T__16);
			this.state = 3376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3375;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3378;
			this.filterExpression();
			this.state = 3387;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 476, this._ctx) ) {
			case 1:
				{
				this.state = 3380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3379;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3382;
				this.match(CypherParser.T__22);
				this.state = 3384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3383;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3386;
				this.expression();
				}
				break;
			}
			this.state = 3390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3389;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3392;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternComprehension(): PatternComprehensionContext {
		let localctx: PatternComprehensionContext = new PatternComprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 470, CypherParser.RULE_patternComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3394;
			this.match(CypherParser.T__16);
			this.state = 3396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3395;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 4294967295) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4294967295) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4294967295) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 4294967295) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 8519679) !== 0) || _la===215 || _la===218) {
				{
				this.state = 3398;
				this.variable();
				this.state = 3400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3399;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3402;
				this.match(CypherParser.T__11);
				this.state = 3404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3403;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 3408;
			this.relationshipsPattern();
			this.state = 3410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3409;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 3412;
				this.match(CypherParser.WHERE);
				this.state = 3414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3413;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3416;
				this.expression();
				this.state = 3418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3417;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 3422;
			this.match(CypherParser.T__22);
			this.state = 3424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3423;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3426;
			this.expression();
			this.state = 3428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3427;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3430;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyLookup(): PropertyLookupContext {
		let localctx: PropertyLookupContext = new PropertyLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 472, CypherParser.RULE_propertyLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3432;
			this.match(CypherParser.T__6);
			this.state = 3434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3433;
				this.match(CypherParser.SP);
				}
			}

			{
			this.state = 3436;
			this.propertyKeyName();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseExpression(): CaseExpressionContext {
		let localctx: CaseExpressionContext = new CaseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 474, CypherParser.RULE_caseExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3460;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 494, this._ctx) ) {
			case 1:
				{
				{
				this.state = 3438;
				this.match(CypherParser.CASE);
				this.state = 3443;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 3440;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 3439;
							this.match(CypherParser.SP);
							}
						}

						this.state = 3442;
						this.caseAlternatives();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 3445;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 490, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 3447;
				this.match(CypherParser.CASE);
				this.state = 3449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3448;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3451;
				this.expression();
				this.state = 3456;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 3453;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===219) {
							{
							this.state = 3452;
							this.match(CypherParser.SP);
							}
						}

						this.state = 3455;
						this.caseAlternatives();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 3458;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 493, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			}
			this.state = 3470;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 497, this._ctx) ) {
			case 1:
				{
				this.state = 3463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3462;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3465;
				this.match(CypherParser.ELSE);
				this.state = 3467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3466;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3469;
				this.expression();
				}
				break;
			}
			this.state = 3473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3472;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3475;
			this.match(CypherParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseAlternatives(): CaseAlternativesContext {
		let localctx: CaseAlternativesContext = new CaseAlternativesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 476, CypherParser.RULE_caseAlternatives);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3477;
			this.match(CypherParser.WHEN);
			this.state = 3479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3478;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3481;
			this.expression();
			this.state = 3483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3482;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3485;
			this.match(CypherParser.THEN);
			this.state = 3487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3486;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3489;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 478, CypherParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3491;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let localctx: NumberLiteralContext = new NumberLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 480, CypherParser.RULE_numberLiteral);
		try {
			this.state = 3495;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 213:
			case 214:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3493;
				this.doubleLiteral();
				}
				break;
			case 203:
			case 204:
			case 205:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3494;
				this.integerLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapLiteral(): MapLiteralContext {
		let localctx: MapLiteralContext = new MapLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 482, CypherParser.RULE_mapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3497;
			this.match(CypherParser.T__13);
			this.state = 3499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3498;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 4294967295) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4294967295) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4294967295) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 4294967295) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 8519679) !== 0) || _la===215 || _la===218) {
				{
				this.state = 3501;
				this.literalEntry();
				this.state = 3503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 3502;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 3505;
					this.match(CypherParser.T__14);
					this.state = 3507;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3506;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3509;
					this.literalEntry();
					this.state = 3511;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3510;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 3517;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 3520;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapProjection(): MapProjectionContext {
		let localctx: MapProjectionContext = new MapProjectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 484, CypherParser.RULE_mapProjection);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3522;
			this.variable();
			this.state = 3524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3523;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3526;
			this.match(CypherParser.T__13);
			this.state = 3528;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 510, this._ctx) ) {
			case 1:
				{
				this.state = 3527;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 3531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7 || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 4294967295) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4294967295) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4294967295) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 4294967295) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 8519679) !== 0) || _la===215 || _la===218) {
				{
				this.state = 3530;
				this.mapProjectionVariants();
				}
			}

			this.state = 3543;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 514, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3533;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3536;
					this.match(CypherParser.T__14);
					this.state = 3538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3537;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3540;
					this.mapProjectionVariants();
					}
					}
				}
				this.state = 3545;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 514, this._ctx);
			}
			this.state = 3547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3546;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3549;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapProjectionVariants(): MapProjectionVariantsContext {
		let localctx: MapProjectionVariantsContext = new MapProjectionVariantsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 486, CypherParser.RULE_mapProjectionVariants);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3555;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 516, this._ctx) ) {
			case 1:
				{
				this.state = 3551;
				this.literalEntry();
				}
				break;
			case 2:
				{
				this.state = 3552;
				this.propertySelector();
				}
				break;
			case 3:
				{
				this.state = 3553;
				this.variableSelector();
				}
				break;
			case 4:
				{
				this.state = 3554;
				this.allPropertiesSelector();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literalEntry(): LiteralEntryContext {
		let localctx: LiteralEntryContext = new LiteralEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 488, CypherParser.RULE_literalEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3557;
			this.propertyKeyName();
			this.state = 3559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3558;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3561;
			this.match(CypherParser.T__1);
			this.state = 3563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3562;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3565;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertySelector(): PropertySelectorContext {
		let localctx: PropertySelectorContext = new PropertySelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 490, CypherParser.RULE_propertySelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3567;
			this.match(CypherParser.T__6);
			this.state = 3568;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableSelector(): VariableSelectorContext {
		let localctx: VariableSelectorContext = new VariableSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 492, CypherParser.RULE_variableSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3570;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allPropertiesSelector(): AllPropertiesSelectorContext {
		let localctx: AllPropertiesSelectorContext = new AllPropertiesSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 494, CypherParser.RULE_allPropertiesSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3572;
			this.match(CypherParser.T__6);
			this.state = 3573;
			this.match(CypherParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 496, CypherParser.RULE_parameter);
		try {
			this.state = 3577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3575;
				this.legacyParameter();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3576;
				this.newParameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public legacyParameter(): LegacyParameterContext {
		let localctx: LegacyParameterContext = new LegacyParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 498, CypherParser.RULE_legacyParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3579;
			this.match(CypherParser.T__13);
			this.state = 3581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3580;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3583;
			this.parameterName();
			this.state = 3585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 3584;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3587;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public newParameter(): NewParameterContext {
		let localctx: NewParameterContext = new NewParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 500, CypherParser.RULE_newParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3589;
			this.match(CypherParser.T__34);
			this.state = 3590;
			this.parameterName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterName(): ParameterNameContext {
		let localctx: ParameterNameContext = new ParameterNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 502, CypherParser.RULE_parameterName);
		try {
			this.state = 3594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 206:
			case 215:
			case 218:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3592;
				this.symbolicName();
				}
				break;
			case 204:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3593;
				this.match(CypherParser.DecimalInteger);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyExpressions(): PropertyExpressionsContext {
		let localctx: PropertyExpressionsContext = new PropertyExpressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 504, CypherParser.RULE_propertyExpressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3596;
			this.propertyExpression();
			this.state = 3607;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 525, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3597;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3600;
					this.match(CypherParser.T__14);
					this.state = 3602;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3601;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3604;
					this.propertyExpression();
					}
					}
				}
				this.state = 3609;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 525, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyExpression(): PropertyExpressionContext {
		let localctx: PropertyExpressionContext = new PropertyExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 506, CypherParser.RULE_propertyExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3610;
			this.atom();
			this.state = 3615;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3612;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3611;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3614;
					this.propertyLookup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3617;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 527, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyKeys(): PropertyKeysContext {
		let localctx: PropertyKeysContext = new PropertyKeysContext(this, this._ctx, this.state);
		this.enterRule(localctx, 508, CypherParser.RULE_propertyKeys);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3619;
			this.propertyKeyName();
			this.state = 3630;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 530, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3621;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3620;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3623;
					this.match(CypherParser.T__14);
					this.state = 3625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===219) {
						{
						this.state = 3624;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3627;
					this.propertyKeyName();
					}
					}
				}
				this.state = 3632;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 530, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyKeyName(): PropertyKeyNameContext {
		let localctx: PropertyKeyNameContext = new PropertyKeyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 510, CypherParser.RULE_propertyKeyName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3633;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let localctx: IntegerLiteralContext = new IntegerLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 512, CypherParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3635;
			_la = this._input.LA(1);
			if(!(((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doubleLiteral(): DoubleLiteralContext {
		let localctx: DoubleLiteralContext = new DoubleLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 514, CypherParser.RULE_doubleLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3637;
			_la = this._input.LA(1);
			if(!(_la===213 || _la===214)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let localctx: NamespaceContext = new NamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 516, CypherParser.RULE_namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3644;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 531, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3639;
					this.symbolicName();
					this.state = 3640;
					this.match(CypherParser.T__6);
					}
					}
				}
				this.state = 3646;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 531, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public leftArrowHead(): LeftArrowHeadContext {
		let localctx: LeftArrowHeadContext = new LeftArrowHeadContext(this, this._ctx, this.state);
		this.enterRule(localctx, 518, CypherParser.RULE_leftArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3647;
			_la = this._input.LA(1);
			if(!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 481) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rightArrowHead(): RightArrowHeadContext {
		let localctx: RightArrowHeadContext = new RightArrowHeadContext(this, this._ctx, this.state);
		this.enterRule(localctx, 520, CypherParser.RULE_rightArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3649;
			_la = this._input.LA(1);
			if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3841) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dash(): DashContext {
		let localctx: DashContext = new DashContext(this, this._ctx, this.state);
		this.enterRule(localctx, 522, CypherParser.RULE_dash);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3651;
			_la = this._input.LA(1);
			if(!(_la===3 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 2047) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolicName(): SymbolicNameContext {
		let localctx: SymbolicNameContext = new SymbolicNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 524, CypherParser.RULE_symbolicName);
		try {
			this.state = 3657;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 215:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3653;
				this.match(CypherParser.UnescapedSymbolicName);
				}
				break;
			case 218:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3654;
				this.match(CypherParser.EscapedSymbolicName);
				}
				break;
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3655;
				this.keyword();
				}
				break;
			case 206:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 3656;
				this.match(CypherParser.HexLetter);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 526, CypherParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3659;
			_la = this._input.LA(1);
			if(!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 4294967295) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4294967295) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4294967295) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 4294967295) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 131071) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,222,3662,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,2,199,
	7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,2,205,
	7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,2,211,
	7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,
	7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,
	7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,
	7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
	7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,2,241,
	7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,2,247,
	7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,2,253,
	7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,2,259,
	7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,263,7,263,1,0,1,0,1,0,5,0,532,
	8,0,10,0,12,0,535,9,0,1,0,3,0,538,8,0,1,0,1,0,1,1,3,1,543,8,1,1,1,1,1,3,
	1,547,8,1,1,1,3,1,550,8,1,1,2,1,2,1,2,3,2,555,8,2,1,3,1,3,1,3,1,3,5,3,561,
	8,3,10,3,12,3,564,9,3,1,4,1,4,1,4,5,4,569,8,4,10,4,12,4,572,9,4,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,584,8,5,1,6,1,6,3,6,588,8,6,1,6,1,6,
	3,6,592,8,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,3,8,601,8,8,1,8,1,8,1,8,3,8,606,
	8,8,1,8,1,8,3,8,610,8,8,1,8,3,8,613,8,8,1,8,3,8,616,8,8,1,9,1,9,1,10,3,
	10,621,8,10,1,10,1,10,3,10,625,8,10,1,11,1,11,1,11,5,11,630,8,11,10,11,
	12,11,633,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,
	14,1,14,5,14,648,8,14,10,14,12,14,651,9,14,1,15,1,15,1,16,1,16,1,16,1,16,
	1,16,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,5,20,671,8,
	20,10,20,12,20,674,9,20,1,21,1,21,1,21,1,21,1,21,3,21,681,8,21,3,21,683,
	8,21,1,22,1,22,3,22,687,8,22,1,22,5,22,690,8,22,10,22,12,22,693,9,22,1,
	23,4,23,696,8,23,11,23,12,23,697,1,24,1,24,1,25,1,25,3,25,704,8,25,1,25,
	1,25,3,25,708,8,25,1,25,1,25,3,25,712,8,25,1,25,1,25,3,25,716,8,25,5,25,
	718,8,25,10,25,12,25,721,9,25,1,25,1,25,1,25,1,25,3,25,727,8,25,1,25,3,
	25,730,8,25,1,26,1,26,3,26,734,8,26,1,26,1,26,3,26,738,8,26,1,26,1,26,1,
	27,1,27,3,27,744,8,27,1,27,1,27,3,27,748,8,27,1,27,1,27,3,27,752,8,27,1,
	27,1,27,3,27,756,8,27,5,27,758,8,27,10,27,12,27,761,9,27,1,27,1,27,1,27,
	1,27,3,27,767,8,27,1,27,3,27,770,8,27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,
	778,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,787,8,29,1,30,1,30,1,30,
	3,30,792,8,30,4,30,794,8,30,11,30,12,30,795,1,30,3,30,799,8,30,1,31,1,31,
	1,31,5,31,804,8,31,10,31,12,31,807,9,31,1,32,1,32,1,32,1,33,1,33,3,33,814,
	8,33,5,33,816,8,33,10,33,12,33,819,9,33,1,34,1,34,1,34,3,34,824,8,34,1,
	35,1,35,1,35,3,35,829,8,35,1,35,1,35,5,35,833,8,35,10,35,12,35,836,9,35,
	1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,3,39,846,8,39,1,39,1,39,3,39,850,
	8,39,1,39,1,39,1,40,1,40,1,40,1,40,3,40,858,8,40,1,40,3,40,861,8,40,1,41,
	1,41,3,41,865,8,41,1,42,1,42,3,42,869,8,42,1,42,5,42,872,8,42,10,42,12,
	42,875,9,42,1,43,1,43,3,43,879,8,43,1,43,1,43,1,44,1,44,3,44,885,8,44,1,
	44,5,44,888,8,44,10,44,12,44,891,9,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
	3,45,900,8,45,1,46,1,46,3,46,904,8,46,1,46,5,46,907,8,46,10,46,12,46,910,
	9,46,1,47,1,47,1,47,1,47,3,47,916,8,47,1,47,1,47,1,47,3,47,921,8,47,1,47,
	3,47,924,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,3,48,941,8,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,3,49,953,8,49,1,50,1,50,1,50,3,50,958,8,50,1,51,1,51,1,51,1,51,
	1,51,3,51,965,8,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,974,8,52,1,53,
	1,53,1,53,1,53,3,53,980,8,53,1,54,1,54,1,54,1,54,3,54,986,8,54,1,54,1,54,
	1,54,1,54,1,54,3,54,993,8,54,1,54,1,54,1,54,1,54,3,54,999,8,54,1,54,1,54,
	1,54,1,54,1,54,3,54,1006,8,54,3,54,1008,8,54,1,55,1,55,1,55,1,55,1,55,1,
	55,1,55,3,55,1017,8,55,1,55,1,55,3,55,1021,8,55,1,55,1,55,1,55,1,55,1,55,
	3,55,1028,8,55,1,55,1,55,1,55,1,55,1,55,3,55,1035,8,55,3,55,1037,8,55,1,
	56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,3,57,1056,8,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,3,59,1070,8,59,1,59,1,59,1,59,3,59,1075,8,59,1,59,1,59,1,59,
	1,59,1,59,3,59,1082,8,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1091,8,
	59,3,59,1093,8,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1102,8,60,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,1118,
	8,61,1,61,1,61,1,61,1,61,3,61,1124,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,1,61,3,61,1135,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,
	1145,8,61,1,62,1,62,1,62,1,62,3,62,1151,8,62,1,62,1,62,1,62,1,62,1,62,1,
	62,1,62,1,62,3,62,1161,8,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,
	1171,8,62,1,62,3,62,1174,8,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,1221,8,63,1,64,1,64,1,64,1,64,
	1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
	64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,
	1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,3,64,1268,8,
	64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,
	1283,8,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1291,8,65,1,66,1,66,1,66,1,
	66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
	3,66,1311,8,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,3,67,1320,8,67,1,67,1,
	67,3,67,1324,8,67,1,67,5,67,1327,8,67,10,67,12,67,1330,9,67,3,67,1332,8,
	67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,1341,8,68,1,68,1,68,3,68,1345,
	8,68,1,68,5,68,1348,8,68,10,68,12,68,1351,9,68,3,68,1353,8,68,1,69,1,69,
	3,69,1357,8,69,1,69,1,69,3,69,1361,8,69,1,69,5,69,1364,8,69,10,69,12,69,
	1367,9,69,1,70,1,70,1,70,1,70,1,70,3,70,1374,8,70,1,70,1,70,1,70,3,70,1379,
	8,70,1,71,1,71,1,71,1,71,1,71,3,71,1386,8,71,1,71,1,71,1,71,1,71,3,71,1392,
	8,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,
	72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,
	1421,8,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,1430,8,72,1,72,1,72,1,
	72,1,72,1,72,1,72,1,72,3,72,1439,8,72,1,72,1,72,1,72,1,72,3,72,1445,8,72,
	1,72,1,72,1,72,1,72,3,72,1451,8,72,1,72,3,72,1454,8,72,3,72,1456,8,72,1,
	73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
	1,73,1,73,1,73,3,73,1476,8,73,1,74,1,74,1,74,1,74,1,74,3,74,1483,8,74,1,
	74,1,74,1,74,1,74,1,74,3,74,1490,8,74,1,74,1,74,1,74,1,74,1,74,3,74,1497,
	8,74,3,74,1499,8,74,1,75,1,75,1,75,3,75,1504,8,75,1,75,1,75,3,75,1508,8,
	75,1,75,5,75,1511,8,75,10,75,12,75,1514,9,75,3,75,1516,8,75,1,76,1,76,3,
	76,1520,8,76,1,76,1,76,3,76,1524,8,76,1,76,1,76,1,77,1,77,1,77,1,77,3,77,
	1532,8,77,1,77,1,77,1,77,1,77,3,77,1538,8,77,1,78,1,78,1,78,1,78,1,78,1,
	78,1,78,3,78,1547,8,78,1,78,1,78,1,78,1,78,1,78,3,78,1554,8,78,1,78,1,78,
	1,78,3,78,1559,8,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,3,79,1568,8,79,1,
	80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,
	1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,
	85,1,85,1,85,3,85,1602,8,85,1,85,1,85,3,85,1606,8,85,1,85,1,85,1,85,1,85,
	1,85,3,85,1613,8,85,1,86,1,86,1,86,1,86,3,86,1619,8,86,1,86,1,86,1,87,1,
	87,1,87,1,87,1,87,1,87,1,88,1,88,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,
	1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,94,1,94,1,
	94,1,94,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,98,
	1,98,1,98,1,98,1,99,1,99,1,99,1,99,3,99,1675,8,99,1,99,1,99,3,99,1679,8,
	99,1,99,1,99,3,99,1683,8,99,1,99,1,99,3,99,1687,8,99,1,99,1,99,1,100,1,
	100,1,100,1,100,3,100,1695,8,100,1,100,1,100,3,100,1699,8,100,1,100,1,100,
	1,100,3,100,1704,8,100,1,100,1,100,3,100,1708,8,100,1,100,1,100,1,100,1,
	100,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,3,101,1722,8,101,1,
	101,1,101,3,101,1726,8,101,1,101,1,101,1,101,3,101,1731,8,101,1,101,1,101,
	3,101,1735,8,101,1,101,1,101,1,101,1,101,3,101,1741,8,101,1,101,1,101,3,
	101,1745,8,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,
	102,1,102,1,102,3,102,1759,8,102,1,102,1,102,1,102,1,102,1,102,3,102,1766,
	8,102,1,102,1,102,1,102,1,102,3,102,1772,8,102,1,102,1,102,1,102,1,102,
	1,103,1,103,1,103,1,103,3,103,1782,8,103,1,103,1,103,3,103,1786,8,103,1,
	103,1,103,1,103,1,103,3,103,1792,8,103,1,103,1,103,1,103,1,103,1,104,1,
	104,3,104,1800,8,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,
	104,3,104,1811,8,104,1,104,1,104,1,104,1,104,3,104,1817,8,104,1,104,1,104,
	1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1829,8,104,1,104,
	1,104,1,104,1,104,3,104,1835,8,104,1,104,1,104,1,104,1,104,1,104,1,104,
	1,104,1,104,1,104,1,104,3,104,1847,8,104,1,104,1,104,3,104,1851,8,104,1,
	105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1861,8,105,1,105,1,
	105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1874,8,
	105,1,106,1,106,3,106,1878,8,106,1,106,1,106,3,106,1882,8,106,1,106,1,106,
	5,106,1886,8,106,10,106,12,106,1889,9,106,1,106,3,106,1892,8,106,1,106,
	3,106,1895,8,106,1,107,1,107,3,107,1899,8,107,1,107,1,107,1,107,1,107,1,
	107,1,107,1,108,1,108,3,108,1909,8,108,1,108,1,108,1,108,5,108,1914,8,108,
	10,108,12,108,1917,9,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
	1,109,1,109,3,109,1929,8,109,1,110,1,110,3,110,1933,8,110,1,110,1,110,1,
	111,1,111,1,111,1,111,3,111,1941,8,111,1,111,1,111,1,112,1,112,3,112,1947,
	8,112,1,112,1,112,3,112,1951,8,112,1,112,1,112,3,112,1955,8,112,1,112,5,
	112,1958,8,112,10,112,12,112,1961,9,112,1,113,1,113,3,113,1965,8,113,1,
	113,1,113,3,113,1969,8,113,1,113,1,113,1,113,1,113,3,113,1975,8,113,1,113,
	1,113,3,113,1979,8,113,1,113,1,113,1,113,1,113,3,113,1985,8,113,1,113,1,
	113,3,113,1989,8,113,1,113,1,113,1,113,1,113,3,113,1995,8,113,1,113,1,113,
	3,113,1999,8,113,1,114,1,114,3,114,2003,8,114,1,114,1,114,3,114,2007,8,
	114,1,114,1,114,3,114,2011,8,114,1,114,1,114,3,114,2015,8,114,1,114,5,114,
	2018,8,114,10,114,12,114,2021,9,114,1,115,1,115,1,115,1,115,3,115,2027,
	8,115,1,115,1,115,3,115,2031,8,115,1,115,5,115,2034,8,115,10,115,12,115,
	2037,9,115,1,116,1,116,1,116,1,116,3,116,2043,8,116,1,117,1,117,3,117,2047,
	8,117,1,117,1,117,3,117,2051,8,117,1,117,1,117,1,117,1,117,1,117,1,117,
	3,117,2059,8,117,1,117,1,117,1,117,4,117,2064,8,117,11,117,12,117,2065,
	1,117,3,117,2069,8,117,1,117,1,117,1,118,1,118,3,118,2075,8,118,1,118,3,
	118,2078,8,118,1,118,1,118,1,118,3,118,2083,8,118,1,118,3,118,2086,8,118,
	1,119,1,119,3,119,2090,8,119,1,119,3,119,2093,8,119,1,119,3,119,2096,8,
	119,1,119,1,119,1,120,1,120,1,120,3,120,2103,8,120,1,120,1,120,3,120,2107,
	8,120,1,120,1,120,3,120,2111,8,120,1,121,1,121,3,121,2115,8,121,1,121,3,
	121,2118,8,121,1,122,1,122,3,122,2122,8,122,1,122,1,122,3,122,2126,8,122,
	1,122,5,122,2129,8,122,10,122,12,122,2132,9,122,1,122,1,122,3,122,2136,
	8,122,1,122,1,122,3,122,2140,8,122,1,122,5,122,2143,8,122,10,122,12,122,
	2146,9,122,1,122,3,122,2149,8,122,1,123,1,123,3,123,2153,8,123,1,124,1,
	124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,3,125,2165,8,125,1,
	125,3,125,2168,8,125,1,126,1,126,3,126,2172,8,126,1,126,1,126,1,127,1,127,
	3,127,2178,8,127,1,127,3,127,2181,8,127,1,127,3,127,2184,8,127,1,127,1,
	127,1,128,1,128,3,128,2190,8,128,1,128,3,128,2193,8,128,1,129,1,129,1,129,
	1,130,1,130,3,130,2200,8,130,1,130,3,130,2203,8,130,1,130,3,130,2206,8,
	130,1,130,1,130,3,130,2210,8,130,1,130,5,130,2213,8,130,10,130,12,130,2216,
	9,130,1,130,3,130,2219,8,130,1,130,1,130,1,131,1,131,1,131,1,131,3,131,
	2227,8,131,1,131,1,131,3,131,2231,8,131,1,131,5,131,2234,8,131,10,131,12,
	131,2237,9,131,1,131,1,131,3,131,2241,8,131,1,132,1,132,3,132,2245,8,132,
	1,133,1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,135,1,135,1,136,1,136,
	1,136,1,136,1,136,1,136,3,136,2263,8,136,1,136,1,136,3,136,2267,8,136,1,
	136,5,136,2270,8,136,10,136,12,136,2273,9,136,1,137,1,137,1,137,1,137,1,
	138,1,138,1,138,1,138,1,139,1,139,3,139,2285,8,139,1,139,1,139,3,139,2289,
	8,139,3,139,2291,8,139,1,140,3,140,2294,8,140,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,3,140,2303,8,140,1,140,1,140,3,140,2307,8,140,1,140,1,140,
	3,140,2311,8,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
	1,140,3,140,2323,8,140,1,140,1,140,3,140,2327,8,140,1,140,5,140,2330,8,
	140,10,140,12,140,2333,9,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
	3,140,2342,8,140,1,141,1,141,1,141,1,141,3,141,2348,8,141,1,141,1,141,3,
	141,2352,8,141,1,141,5,141,2355,8,141,10,141,12,141,2358,9,141,1,141,3,
	141,2361,8,141,1,142,1,142,3,142,2365,8,142,1,142,1,142,3,142,2369,8,142,
	1,142,1,142,1,143,1,143,3,143,2375,8,143,1,144,1,144,3,144,2379,8,144,1,
	144,1,144,1,144,3,144,2384,8,144,1,145,1,145,1,145,1,145,3,145,2390,8,145,
	1,146,1,146,1,146,1,146,1,146,1,146,1,146,3,146,2399,8,146,1,146,1,146,
	1,147,1,147,1,147,1,147,1,147,3,147,2408,8,147,1,147,1,147,1,148,1,148,
	1,148,1,148,3,148,2416,8,148,1,148,1,148,1,149,1,149,3,149,2422,8,149,1,
	149,1,149,3,149,2426,8,149,1,149,5,149,2429,8,149,10,149,12,149,2432,9,
	149,1,150,1,150,1,150,1,150,1,151,1,151,3,151,2440,8,151,1,151,1,151,3,
	151,2444,8,151,1,151,5,151,2447,8,151,10,151,12,151,2450,9,151,1,152,1,
	152,3,152,2454,8,152,1,152,1,152,3,152,2458,8,152,1,152,1,152,1,152,3,152,
	2463,8,152,1,153,1,153,3,153,2467,8,153,1,154,1,154,3,154,2471,8,154,1,
	154,5,154,2474,8,154,10,154,12,154,2477,9,154,1,154,1,154,1,154,1,154,3,
	154,2483,8,154,1,155,1,155,3,155,2487,8,155,1,155,1,155,3,155,2491,8,155,
	3,155,2493,8,155,1,155,1,155,3,155,2497,8,155,3,155,2499,8,155,1,155,1,
	155,3,155,2503,8,155,3,155,2505,8,155,1,155,1,155,1,156,1,156,3,156,2511,
	8,156,1,156,1,156,1,157,1,157,3,157,2517,8,157,1,157,3,157,2520,8,157,1,
	157,3,157,2523,8,157,1,157,1,157,1,158,1,158,3,158,2529,8,158,1,158,1,158,
	1,158,3,158,2534,8,158,1,159,1,159,3,159,2538,8,159,1,159,1,159,1,159,3,
	159,2543,8,159,1,160,1,160,3,160,2547,8,160,1,160,1,160,3,160,2551,8,160,
	3,160,2553,8,160,1,160,1,160,3,160,2557,8,160,3,160,2559,8,160,1,160,3,
	160,2562,8,160,1,160,1,160,3,160,2566,8,160,3,160,2568,8,160,1,160,1,160,
	1,161,1,161,3,161,2574,8,161,1,162,1,162,3,162,2578,8,162,1,162,1,162,1,
	163,1,163,3,163,2584,8,163,1,164,1,164,1,164,1,164,3,164,2590,8,164,1,165,
	1,165,1,166,1,166,3,166,2596,8,166,1,166,1,166,3,166,2600,8,166,1,166,5,
	166,2603,8,166,10,166,12,166,2606,9,166,1,167,1,167,3,167,2610,8,167,1,
	167,1,167,3,167,2614,8,167,1,167,5,167,2617,8,167,10,167,12,167,2620,9,
	167,1,168,5,168,2623,8,168,10,168,12,168,2626,9,168,1,168,3,168,2629,8,
	168,1,168,1,168,1,169,1,169,3,169,2635,8,169,1,169,1,169,3,169,2639,8,169,
	1,169,1,169,1,170,1,170,3,170,2645,8,170,1,170,1,170,5,170,2649,8,170,10,
	170,12,170,2652,9,170,1,171,1,171,1,171,1,172,1,172,1,173,3,173,2660,8,
	173,1,173,1,173,1,174,1,174,3,174,2666,8,174,1,174,5,174,2669,8,174,10,
	174,12,174,2672,9,174,1,175,1,175,1,175,1,176,1,176,3,176,2679,8,176,1,
	177,1,177,1,177,1,177,3,177,2685,8,177,1,178,1,178,1,179,1,179,3,179,2691,
	8,179,1,179,1,179,3,179,2695,8,179,1,179,5,179,2698,8,179,10,179,12,179,
	2701,9,179,1,180,1,180,3,180,2705,8,180,1,180,1,180,3,180,2709,8,180,1,
	180,5,180,2712,8,180,10,180,12,180,2715,9,180,1,181,5,181,2718,8,181,10,
	181,12,181,2721,9,181,1,181,3,181,2724,8,181,1,181,1,181,1,182,1,182,3,
	182,2730,8,182,1,182,1,182,3,182,2734,8,182,1,182,1,182,1,183,1,183,3,183,
	2740,8,183,1,183,1,183,3,183,2744,8,183,3,183,2746,8,183,1,183,1,183,3,
	183,2750,8,183,1,183,1,183,3,183,2754,8,183,3,183,2756,8,183,3,183,2758,
	8,183,1,184,1,184,1,185,1,185,1,186,1,186,1,187,1,187,3,187,2768,8,187,
	1,187,1,187,1,188,1,188,3,188,2774,8,188,1,189,1,189,3,189,2778,8,189,1,
	189,1,189,5,189,2782,8,189,10,189,12,189,2785,9,189,1,189,3,189,2788,8,
	189,1,189,3,189,2791,8,189,1,189,3,189,2794,8,189,1,189,1,189,1,190,1,190,
	1,190,1,190,1,190,5,190,2803,8,190,10,190,12,190,2806,9,190,1,191,1,191,
	1,191,1,191,1,191,5,191,2813,8,191,10,191,12,191,2816,9,191,1,192,1,192,
	1,192,1,192,1,192,5,192,2823,8,192,10,192,12,192,2826,9,192,1,193,1,193,
	3,193,2830,8,193,5,193,2832,8,193,10,193,12,193,2835,9,193,1,193,1,193,
	1,194,1,194,3,194,2841,8,194,1,194,5,194,2844,8,194,10,194,12,194,2847,
	9,194,1,195,1,195,3,195,2851,8,195,1,195,1,195,3,195,2855,8,195,1,195,1,
	195,3,195,2859,8,195,1,195,1,195,3,195,2863,8,195,1,195,5,195,2866,8,195,
	10,195,12,195,2869,9,195,1,196,1,196,3,196,2873,8,196,1,196,1,196,3,196,
	2877,8,196,1,196,1,196,3,196,2881,8,196,1,196,1,196,3,196,2885,8,196,1,
	196,1,196,3,196,2889,8,196,1,196,1,196,3,196,2893,8,196,1,196,5,196,2896,
	8,196,10,196,12,196,2899,9,196,1,197,1,197,3,197,2903,8,197,1,197,1,197,
	3,197,2907,8,197,1,197,5,197,2910,8,197,10,197,12,197,2913,9,197,1,198,
	1,198,3,198,2917,8,198,5,198,2919,8,198,10,198,12,198,2922,9,198,1,198,
	1,198,1,199,1,199,3,199,2928,8,199,1,199,1,199,1,199,1,199,1,199,3,199,
	2935,8,199,1,199,1,199,3,199,2939,8,199,1,199,1,199,3,199,2943,8,199,1,
	199,1,199,3,199,2947,8,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,
	199,1,199,1,199,1,199,1,199,1,199,3,199,2962,8,199,1,199,3,199,2965,8,199,
	1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,5,199,
	2978,8,199,10,199,12,199,2981,9,199,1,200,1,200,3,200,2985,8,200,1,200,
	1,200,3,200,2989,8,200,5,200,2991,8,200,10,200,12,200,2994,9,200,1,201,
	1,201,3,201,2998,8,201,1,201,1,201,3,201,3002,8,201,1,201,1,201,3,201,3006,
	8,201,1,201,1,201,1,202,1,202,1,203,1,203,3,203,3014,8,203,1,203,1,203,
	3,203,3018,8,203,1,203,1,203,3,203,3022,8,203,1,203,1,203,1,204,1,204,1,
	205,1,205,3,205,3030,8,205,1,205,1,205,3,205,3034,8,205,1,205,1,205,3,205,
	3038,8,205,1,205,1,205,1,206,1,206,1,207,1,207,3,207,3046,8,207,1,207,1,
	207,3,207,3050,8,207,1,207,1,207,3,207,3054,8,207,1,207,1,207,1,208,1,208,
	1,209,1,209,3,209,3062,8,209,1,209,1,209,3,209,3066,8,209,1,209,1,209,3,
	209,3070,8,209,1,209,1,209,1,210,1,210,1,211,1,211,3,211,3078,8,211,1,211,
	1,211,3,211,3082,8,211,1,211,1,211,3,211,3086,8,211,1,211,1,211,1,212,1,
	212,1,213,1,213,3,213,3094,8,213,1,213,1,213,3,213,3098,8,213,1,213,1,213,
	3,213,3102,8,213,1,213,1,213,3,213,3106,8,213,1,213,3,213,3109,8,213,1,
	213,3,213,3112,8,213,1,213,1,213,1,214,1,214,1,215,1,215,3,215,3120,8,215,
	1,215,1,215,3,215,3124,8,215,1,215,1,215,3,215,3128,8,215,1,215,1,215,3,
	215,3132,8,215,1,215,1,215,3,215,3136,8,215,1,215,1,215,3,215,3140,8,215,
	1,215,1,215,3,215,3144,8,215,1,215,1,215,3,215,3148,8,215,1,215,1,215,3,
	215,3152,8,215,1,215,1,215,1,216,1,216,1,217,1,217,3,217,3160,8,217,1,217,
	1,217,3,217,3164,8,217,1,217,1,217,3,217,3168,8,217,1,217,1,217,1,217,1,
	217,3,217,3174,8,217,1,217,1,217,3,217,3178,8,217,1,217,1,217,3,217,3182,
	8,217,1,217,1,217,3,217,3186,8,217,1,218,1,218,1,219,1,219,1,220,1,220,
	1,220,1,220,1,220,3,220,3197,8,220,1,220,1,220,3,220,3201,8,220,1,220,1,
	220,3,220,3205,8,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,
	220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,3,220,3224,8,220,1,
	221,1,221,1,221,1,221,1,221,1,221,1,221,3,221,3233,8,221,1,222,1,222,1,
	223,1,223,1,224,1,224,3,224,3241,8,224,1,224,1,224,3,224,3245,8,224,1,224,
	1,224,3,224,3249,8,224,1,224,1,224,3,224,3253,8,224,5,224,3255,8,224,10,
	224,12,224,3258,9,224,3,224,3260,8,224,1,224,1,224,1,225,1,225,3,225,3266,
	8,225,1,225,1,225,1,225,3,225,3271,8,225,1,225,1,225,1,225,3,225,3276,8,
	225,1,225,1,225,1,225,3,225,3281,8,225,1,225,1,225,1,225,3,225,3286,8,225,
	1,225,1,225,1,225,3,225,3291,8,225,1,225,1,225,1,225,3,225,3296,8,225,1,
	225,3,225,3299,8,225,1,226,1,226,3,226,3303,8,226,1,226,1,226,3,226,3307,
	8,226,1,226,1,226,1,227,1,227,3,227,3313,8,227,1,227,4,227,3316,8,227,11,
	227,12,227,3317,1,228,1,228,3,228,3322,8,228,1,228,3,228,3325,8,228,1,229,
	1,229,1,229,1,229,1,229,1,229,1,230,1,230,3,230,3335,8,230,1,230,1,230,
	3,230,3339,8,230,1,230,1,230,3,230,3343,8,230,3,230,3345,8,230,1,230,1,
	230,3,230,3349,8,230,1,230,1,230,3,230,3353,8,230,1,230,1,230,3,230,3357,
	8,230,5,230,3359,8,230,10,230,12,230,3362,9,230,3,230,3364,8,230,1,230,
	1,230,1,231,1,231,1,231,1,232,1,232,1,233,1,233,1,234,1,234,3,234,3377,
	8,234,1,234,1,234,3,234,3381,8,234,1,234,1,234,3,234,3385,8,234,1,234,3,
	234,3388,8,234,1,234,3,234,3391,8,234,1,234,1,234,1,235,1,235,3,235,3397,
	8,235,1,235,1,235,3,235,3401,8,235,1,235,1,235,3,235,3405,8,235,3,235,3407,
	8,235,1,235,1,235,3,235,3411,8,235,1,235,1,235,3,235,3415,8,235,1,235,1,
	235,3,235,3419,8,235,3,235,3421,8,235,1,235,1,235,3,235,3425,8,235,1,235,
	1,235,3,235,3429,8,235,1,235,1,235,1,236,1,236,3,236,3435,8,236,1,236,1,
	236,1,237,1,237,3,237,3441,8,237,1,237,4,237,3444,8,237,11,237,12,237,3445,
	1,237,1,237,3,237,3450,8,237,1,237,1,237,3,237,3454,8,237,1,237,4,237,3457,
	8,237,11,237,12,237,3458,3,237,3461,8,237,1,237,3,237,3464,8,237,1,237,
	1,237,3,237,3468,8,237,1,237,3,237,3471,8,237,1,237,3,237,3474,8,237,1,
	237,1,237,1,238,1,238,3,238,3480,8,238,1,238,1,238,3,238,3484,8,238,1,238,
	1,238,3,238,3488,8,238,1,238,1,238,1,239,1,239,1,240,1,240,3,240,3496,8,
	240,1,241,1,241,3,241,3500,8,241,1,241,1,241,3,241,3504,8,241,1,241,1,241,
	3,241,3508,8,241,1,241,1,241,3,241,3512,8,241,5,241,3514,8,241,10,241,12,
	241,3517,9,241,3,241,3519,8,241,1,241,1,241,1,242,1,242,3,242,3525,8,242,
	1,242,1,242,3,242,3529,8,242,1,242,3,242,3532,8,242,1,242,3,242,3535,8,
	242,1,242,1,242,3,242,3539,8,242,1,242,5,242,3542,8,242,10,242,12,242,3545,
	9,242,1,242,3,242,3548,8,242,1,242,1,242,1,243,1,243,1,243,1,243,3,243,
	3556,8,243,1,244,1,244,3,244,3560,8,244,1,244,1,244,3,244,3564,8,244,1,
	244,1,244,1,245,1,245,1,245,1,246,1,246,1,247,1,247,1,247,1,248,1,248,3,
	248,3578,8,248,1,249,1,249,3,249,3582,8,249,1,249,1,249,3,249,3586,8,249,
	1,249,1,249,1,250,1,250,1,250,1,251,1,251,3,251,3595,8,251,1,252,1,252,
	3,252,3599,8,252,1,252,1,252,3,252,3603,8,252,1,252,5,252,3606,8,252,10,
	252,12,252,3609,9,252,1,253,1,253,3,253,3613,8,253,1,253,4,253,3616,8,253,
	11,253,12,253,3617,1,254,1,254,3,254,3622,8,254,1,254,1,254,3,254,3626,
	8,254,1,254,5,254,3629,8,254,10,254,12,254,3632,9,254,1,255,1,255,1,256,
	1,256,1,257,1,257,1,258,1,258,1,258,5,258,3643,8,258,10,258,12,258,3646,
	9,258,1,259,1,259,1,260,1,260,1,261,1,261,1,262,1,262,1,262,1,262,3,262,
	3658,8,262,1,263,1,263,1,263,1,691,0,264,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
	72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
	116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,
	152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,
	188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,
	224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,
	260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,
	296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,
	332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,
	368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,
	404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,
	440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,
	476,478,480,482,484,486,488,490,492,494,496,498,500,502,504,506,508,510,
	512,514,516,518,520,522,524,526,0,23,2,0,7,7,13,13,1,0,159,160,1,0,137,
	138,1,0,139,140,2,0,65,65,172,172,2,0,67,67,182,182,1,0,175,176,1,0,179,
	180,1,0,177,178,2,0,103,103,162,162,2,0,102,102,163,163,1,0,164,165,1,0,
	153,154,1,0,95,98,1,0,103,104,2,0,3,3,13,13,1,0,122,123,1,0,203,205,1,0,
	213,214,2,0,31,31,36,39,2,0,32,32,40,43,2,0,3,3,44,54,1,0,55,199,4055,0,
	528,1,0,0,0,2,542,1,0,0,0,4,551,1,0,0,0,6,556,1,0,0,0,8,565,1,0,0,0,10,
	583,1,0,0,0,12,585,1,0,0,0,14,595,1,0,0,0,16,597,1,0,0,0,18,617,1,0,0,0,
	20,620,1,0,0,0,22,626,1,0,0,0,24,634,1,0,0,0,26,642,1,0,0,0,28,644,1,0,
	0,0,30,652,1,0,0,0,32,654,1,0,0,0,34,659,1,0,0,0,36,661,1,0,0,0,38,664,
	1,0,0,0,40,667,1,0,0,0,42,675,1,0,0,0,44,684,1,0,0,0,46,695,1,0,0,0,48,
	699,1,0,0,0,50,729,1,0,0,0,52,731,1,0,0,0,54,769,1,0,0,0,56,777,1,0,0,0,
	58,779,1,0,0,0,60,793,1,0,0,0,62,800,1,0,0,0,64,808,1,0,0,0,66,817,1,0,
	0,0,68,823,1,0,0,0,70,825,1,0,0,0,72,837,1,0,0,0,74,839,1,0,0,0,76,841,
	1,0,0,0,78,843,1,0,0,0,80,860,1,0,0,0,82,864,1,0,0,0,84,866,1,0,0,0,86,
	876,1,0,0,0,88,882,1,0,0,0,90,892,1,0,0,0,92,901,1,0,0,0,94,923,1,0,0,0,
	96,940,1,0,0,0,98,952,1,0,0,0,100,957,1,0,0,0,102,964,1,0,0,0,104,973,1,
	0,0,0,106,979,1,0,0,0,108,1007,1,0,0,0,110,1036,1,0,0,0,112,1038,1,0,0,
	0,114,1046,1,0,0,0,116,1057,1,0,0,0,118,1092,1,0,0,0,120,1094,1,0,0,0,122,
	1144,1,0,0,0,124,1173,1,0,0,0,126,1220,1,0,0,0,128,1267,1,0,0,0,130,1290,
	1,0,0,0,132,1310,1,0,0,0,134,1331,1,0,0,0,136,1352,1,0,0,0,138,1354,1,0,
	0,0,140,1378,1,0,0,0,142,1391,1,0,0,0,144,1455,1,0,0,0,146,1475,1,0,0,0,
	148,1498,1,0,0,0,150,1515,1,0,0,0,152,1517,1,0,0,0,154,1537,1,0,0,0,156,
	1558,1,0,0,0,158,1560,1,0,0,0,160,1569,1,0,0,0,162,1575,1,0,0,0,164,1581,
	1,0,0,0,166,1587,1,0,0,0,168,1591,1,0,0,0,170,1612,1,0,0,0,172,1614,1,0,
	0,0,174,1622,1,0,0,0,176,1628,1,0,0,0,178,1630,1,0,0,0,180,1634,1,0,0,0,
	182,1638,1,0,0,0,184,1642,1,0,0,0,186,1646,1,0,0,0,188,1650,1,0,0,0,190,
	1654,1,0,0,0,192,1658,1,0,0,0,194,1662,1,0,0,0,196,1666,1,0,0,0,198,1670,
	1,0,0,0,200,1690,1,0,0,0,202,1717,1,0,0,0,204,1754,1,0,0,0,206,1777,1,0,
	0,0,208,1850,1,0,0,0,210,1852,1,0,0,0,212,1877,1,0,0,0,214,1896,1,0,0,0,
	216,1906,1,0,0,0,218,1928,1,0,0,0,220,1930,1,0,0,0,222,1936,1,0,0,0,224,
	1944,1,0,0,0,226,1998,1,0,0,0,228,2002,1,0,0,0,230,2022,1,0,0,0,232,2042,
	1,0,0,0,234,2044,1,0,0,0,236,2072,1,0,0,0,238,2087,1,0,0,0,240,2099,1,0,
	0,0,242,2112,1,0,0,0,244,2148,1,0,0,0,246,2152,1,0,0,0,248,2154,1,0,0,0,
	250,2160,1,0,0,0,252,2169,1,0,0,0,254,2175,1,0,0,0,256,2187,1,0,0,0,258,
	2194,1,0,0,0,260,2197,1,0,0,0,262,2222,1,0,0,0,264,2244,1,0,0,0,266,2246,
	1,0,0,0,268,2252,1,0,0,0,270,2254,1,0,0,0,272,2256,1,0,0,0,274,2274,1,0,
	0,0,276,2278,1,0,0,0,278,2282,1,0,0,0,280,2293,1,0,0,0,282,2343,1,0,0,0,
	284,2362,1,0,0,0,286,2374,1,0,0,0,288,2376,1,0,0,0,290,2385,1,0,0,0,292,
	2391,1,0,0,0,294,2402,1,0,0,0,296,2411,1,0,0,0,298,2419,1,0,0,0,300,2433,
	1,0,0,0,302,2437,1,0,0,0,304,2462,1,0,0,0,306,2466,1,0,0,0,308,2482,1,0,
	0,0,310,2484,1,0,0,0,312,2508,1,0,0,0,314,2514,1,0,0,0,316,2533,1,0,0,0,
	318,2542,1,0,0,0,320,2544,1,0,0,0,322,2573,1,0,0,0,324,2575,1,0,0,0,326,
	2583,1,0,0,0,328,2589,1,0,0,0,330,2591,1,0,0,0,332,2593,1,0,0,0,334,2607,
	1,0,0,0,336,2624,1,0,0,0,338,2632,1,0,0,0,340,2642,1,0,0,0,342,2653,1,0,
	0,0,344,2656,1,0,0,0,346,2659,1,0,0,0,348,2663,1,0,0,0,350,2673,1,0,0,0,
	352,2678,1,0,0,0,354,2684,1,0,0,0,356,2686,1,0,0,0,358,2688,1,0,0,0,360,
	2702,1,0,0,0,362,2719,1,0,0,0,364,2727,1,0,0,0,366,2737,1,0,0,0,368,2759,
	1,0,0,0,370,2761,1,0,0,0,372,2763,1,0,0,0,374,2765,1,0,0,0,376,2773,1,0,
	0,0,378,2775,1,0,0,0,380,2797,1,0,0,0,382,2807,1,0,0,0,384,2817,1,0,0,0,
	386,2833,1,0,0,0,388,2838,1,0,0,0,390,2848,1,0,0,0,392,2870,1,0,0,0,394,
	2900,1,0,0,0,396,2920,1,0,0,0,398,2925,1,0,0,0,400,2982,1,0,0,0,402,2995,
	1,0,0,0,404,3009,1,0,0,0,406,3011,1,0,0,0,408,3025,1,0,0,0,410,3027,1,0,
	0,0,412,3041,1,0,0,0,414,3043,1,0,0,0,416,3057,1,0,0,0,418,3059,1,0,0,0,
	420,3073,1,0,0,0,422,3075,1,0,0,0,424,3089,1,0,0,0,426,3091,1,0,0,0,428,
	3115,1,0,0,0,430,3117,1,0,0,0,432,3155,1,0,0,0,434,3185,1,0,0,0,436,3187,
	1,0,0,0,438,3189,1,0,0,0,440,3223,1,0,0,0,442,3232,1,0,0,0,444,3234,1,0,
	0,0,446,3236,1,0,0,0,448,3238,1,0,0,0,450,3298,1,0,0,0,452,3300,1,0,0,0,
	454,3310,1,0,0,0,456,3319,1,0,0,0,458,3326,1,0,0,0,460,3332,1,0,0,0,462,
	3367,1,0,0,0,464,3370,1,0,0,0,466,3372,1,0,0,0,468,3374,1,0,0,0,470,3394,
	1,0,0,0,472,3432,1,0,0,0,474,3460,1,0,0,0,476,3477,1,0,0,0,478,3491,1,0,
	0,0,480,3495,1,0,0,0,482,3497,1,0,0,0,484,3522,1,0,0,0,486,3555,1,0,0,0,
	488,3557,1,0,0,0,490,3567,1,0,0,0,492,3570,1,0,0,0,494,3572,1,0,0,0,496,
	3577,1,0,0,0,498,3579,1,0,0,0,500,3589,1,0,0,0,502,3594,1,0,0,0,504,3596,
	1,0,0,0,506,3610,1,0,0,0,508,3619,1,0,0,0,510,3633,1,0,0,0,512,3635,1,0,
	0,0,514,3637,1,0,0,0,516,3644,1,0,0,0,518,3647,1,0,0,0,520,3649,1,0,0,0,
	522,3651,1,0,0,0,524,3657,1,0,0,0,526,3659,1,0,0,0,528,533,3,2,1,0,529,
	530,5,1,0,0,530,532,3,2,1,0,531,529,1,0,0,0,532,535,1,0,0,0,533,531,1,0,
	0,0,533,534,1,0,0,0,534,537,1,0,0,0,535,533,1,0,0,0,536,538,5,1,0,0,537,
	536,1,0,0,0,537,538,1,0,0,0,538,539,1,0,0,0,539,540,5,0,0,1,540,1,1,0,0,
	0,541,543,5,219,0,0,542,541,1,0,0,0,542,543,1,0,0,0,543,546,1,0,0,0,544,
	547,3,64,32,0,545,547,3,4,2,0,546,544,1,0,0,0,546,545,1,0,0,0,547,549,1,
	0,0,0,548,550,5,219,0,0,549,548,1,0,0,0,549,550,1,0,0,0,550,3,1,0,0,0,551,
	554,3,6,3,0,552,553,5,219,0,0,553,555,3,8,4,0,554,552,1,0,0,0,554,555,1,
	0,0,0,555,5,1,0,0,0,556,557,5,2,0,0,557,562,3,524,262,0,558,559,5,3,0,0,
	559,561,3,524,262,0,560,558,1,0,0,0,561,564,1,0,0,0,562,560,1,0,0,0,562,
	563,1,0,0,0,563,7,1,0,0,0,564,562,1,0,0,0,565,570,3,10,5,0,566,567,5,219,
	0,0,567,569,3,10,5,0,568,566,1,0,0,0,569,572,1,0,0,0,570,568,1,0,0,0,570,
	571,1,0,0,0,571,9,1,0,0,0,572,570,1,0,0,0,573,584,3,14,7,0,574,584,3,48,
	24,0,575,584,3,12,6,0,576,584,3,482,241,0,577,584,3,58,29,0,578,584,3,444,
	222,0,579,584,3,480,240,0,580,584,3,446,223,0,581,584,3,62,31,0,582,584,
	3,60,30,0,583,573,1,0,0,0,583,574,1,0,0,0,583,575,1,0,0,0,583,576,1,0,0,
	0,583,577,1,0,0,0,583,578,1,0,0,0,583,579,1,0,0,0,583,580,1,0,0,0,583,581,
	1,0,0,0,583,582,1,0,0,0,584,11,1,0,0,0,585,587,3,524,262,0,586,588,5,219,
	0,0,587,586,1,0,0,0,587,588,1,0,0,0,588,589,1,0,0,0,589,591,5,4,0,0,590,
	592,5,219,0,0,591,590,1,0,0,0,591,592,1,0,0,0,592,593,1,0,0,0,593,594,3,
	372,186,0,594,13,1,0,0,0,595,596,3,16,8,0,596,15,1,0,0,0,597,598,3,18,9,
	0,598,600,5,5,0,0,599,601,3,32,16,0,600,599,1,0,0,0,600,601,1,0,0,0,601,
	602,1,0,0,0,602,605,3,20,10,0,603,604,5,2,0,0,604,606,3,26,13,0,605,603,
	1,0,0,0,605,606,1,0,0,0,606,609,1,0,0,0,607,608,5,6,0,0,608,610,3,28,14,
	0,609,607,1,0,0,0,609,610,1,0,0,0,610,612,1,0,0,0,611,613,3,38,19,0,612,
	611,1,0,0,0,612,613,1,0,0,0,613,615,1,0,0,0,614,616,3,36,18,0,615,614,1,
	0,0,0,615,616,1,0,0,0,616,17,1,0,0,0,617,618,3,44,22,0,618,19,1,0,0,0,619,
	621,5,6,0,0,620,619,1,0,0,0,620,621,1,0,0,0,621,624,1,0,0,0,622,625,3,22,
	11,0,623,625,3,24,12,0,624,622,1,0,0,0,624,623,1,0,0,0,625,21,1,0,0,0,626,
	631,3,44,22,0,627,628,5,7,0,0,628,630,3,44,22,0,629,627,1,0,0,0,630,633,
	1,0,0,0,631,629,1,0,0,0,631,632,1,0,0,0,632,23,1,0,0,0,633,631,1,0,0,0,
	634,635,3,46,23,0,635,636,5,7,0,0,636,637,3,46,23,0,637,638,5,7,0,0,638,
	639,3,46,23,0,639,640,5,7,0,0,640,641,3,46,23,0,641,25,1,0,0,0,642,643,
	3,46,23,0,643,27,1,0,0,0,644,649,3,44,22,0,645,646,5,6,0,0,646,648,3,44,
	22,0,647,645,1,0,0,0,648,651,1,0,0,0,649,647,1,0,0,0,649,650,1,0,0,0,650,
	29,1,0,0,0,651,649,1,0,0,0,652,653,3,44,22,0,653,31,1,0,0,0,654,655,3,30,
	15,0,655,656,5,2,0,0,656,657,3,34,17,0,657,658,5,8,0,0,658,33,1,0,0,0,659,
	660,3,44,22,0,660,35,1,0,0,0,661,662,5,9,0,0,662,663,3,44,22,0,663,37,1,
	0,0,0,664,665,5,10,0,0,665,666,3,40,20,0,666,39,1,0,0,0,667,672,3,42,21,
	0,668,669,5,11,0,0,669,671,3,42,21,0,670,668,1,0,0,0,671,674,1,0,0,0,672,
	670,1,0,0,0,672,673,1,0,0,0,673,41,1,0,0,0,674,672,1,0,0,0,675,682,3,44,
	22,0,676,680,5,12,0,0,677,681,3,44,22,0,678,681,3,46,23,0,679,681,5,201,
	0,0,680,677,1,0,0,0,680,678,1,0,0,0,680,679,1,0,0,0,681,683,1,0,0,0,682,
	676,1,0,0,0,682,683,1,0,0,0,683,43,1,0,0,0,684,691,3,524,262,0,685,687,
	7,0,0,0,686,685,1,0,0,0,686,687,1,0,0,0,687,688,1,0,0,0,688,690,3,524,262,
	0,689,686,1,0,0,0,690,693,1,0,0,0,691,692,1,0,0,0,691,689,1,0,0,0,692,45,
	1,0,0,0,693,691,1,0,0,0,694,696,3,512,256,0,695,694,1,0,0,0,696,697,1,0,
	0,0,697,695,1,0,0,0,697,698,1,0,0,0,698,47,1,0,0,0,699,700,3,56,28,0,700,
	49,1,0,0,0,701,703,5,14,0,0,702,704,5,219,0,0,703,702,1,0,0,0,703,704,1,
	0,0,0,704,705,1,0,0,0,705,707,3,52,26,0,706,708,5,219,0,0,707,706,1,0,0,
	0,707,708,1,0,0,0,708,719,1,0,0,0,709,711,5,15,0,0,710,712,5,219,0,0,711,
	710,1,0,0,0,711,712,1,0,0,0,712,713,1,0,0,0,713,715,3,52,26,0,714,716,5,
	219,0,0,715,714,1,0,0,0,715,716,1,0,0,0,716,718,1,0,0,0,717,709,1,0,0,0,
	718,721,1,0,0,0,719,717,1,0,0,0,719,720,1,0,0,0,720,722,1,0,0,0,721,719,
	1,0,0,0,722,723,5,16,0,0,723,730,1,0,0,0,724,726,5,14,0,0,725,727,5,219,
	0,0,726,725,1,0,0,0,726,727,1,0,0,0,727,728,1,0,0,0,728,730,5,16,0,0,729,
	701,1,0,0,0,729,724,1,0,0,0,730,51,1,0,0,0,731,733,3,444,222,0,732,734,
	5,219,0,0,733,732,1,0,0,0,733,734,1,0,0,0,734,735,1,0,0,0,735,737,5,2,0,
	0,736,738,5,219,0,0,737,736,1,0,0,0,737,738,1,0,0,0,738,739,1,0,0,0,739,
	740,3,56,28,0,740,53,1,0,0,0,741,743,5,17,0,0,742,744,5,219,0,0,743,742,
	1,0,0,0,743,744,1,0,0,0,744,745,1,0,0,0,745,747,3,56,28,0,746,748,5,219,
	0,0,747,746,1,0,0,0,747,748,1,0,0,0,748,759,1,0,0,0,749,751,5,15,0,0,750,
	752,5,219,0,0,751,750,1,0,0,0,751,752,1,0,0,0,752,753,1,0,0,0,753,755,3,
	56,28,0,754,756,5,219,0,0,755,754,1,0,0,0,755,756,1,0,0,0,756,758,1,0,0,
	0,757,749,1,0,0,0,758,761,1,0,0,0,759,757,1,0,0,0,759,760,1,0,0,0,760,762,
	1,0,0,0,761,759,1,0,0,0,762,763,5,18,0,0,763,770,1,0,0,0,764,766,5,17,0,
	0,765,767,5,219,0,0,766,765,1,0,0,0,766,767,1,0,0,0,767,768,1,0,0,0,768,
	770,5,18,0,0,769,741,1,0,0,0,769,764,1,0,0,0,770,55,1,0,0,0,771,778,3,444,
	222,0,772,778,3,480,240,0,773,778,3,50,25,0,774,778,3,54,27,0,775,778,3,
	446,223,0,776,778,5,115,0,0,777,771,1,0,0,0,777,772,1,0,0,0,777,773,1,0,
	0,0,777,774,1,0,0,0,777,775,1,0,0,0,777,776,1,0,0,0,778,57,1,0,0,0,779,
	780,3,478,239,0,780,781,5,2,0,0,781,786,5,219,0,0,782,787,5,200,0,0,783,
	787,3,480,240,0,784,787,3,446,223,0,785,787,3,524,262,0,786,782,1,0,0,0,
	786,783,1,0,0,0,786,784,1,0,0,0,786,785,1,0,0,0,787,59,1,0,0,0,788,791,
	5,6,0,0,789,792,3,524,262,0,790,792,3,480,240,0,791,789,1,0,0,0,791,790,
	1,0,0,0,792,794,1,0,0,0,793,788,1,0,0,0,794,795,1,0,0,0,795,793,1,0,0,0,
	795,796,1,0,0,0,796,798,1,0,0,0,797,799,5,6,0,0,798,797,1,0,0,0,798,799,
	1,0,0,0,799,61,1,0,0,0,800,805,3,524,262,0,801,802,5,3,0,0,802,804,3,524,
	262,0,803,801,1,0,0,0,804,807,1,0,0,0,805,803,1,0,0,0,805,806,1,0,0,0,806,
	63,1,0,0,0,807,805,1,0,0,0,808,809,3,66,33,0,809,810,3,80,40,0,810,65,1,
	0,0,0,811,813,3,68,34,0,812,814,5,219,0,0,813,812,1,0,0,0,813,814,1,0,0,
	0,814,816,1,0,0,0,815,811,1,0,0,0,816,819,1,0,0,0,817,815,1,0,0,0,817,818,
	1,0,0,0,818,67,1,0,0,0,819,817,1,0,0,0,820,824,3,70,35,0,821,824,3,74,37,
	0,822,824,3,76,38,0,823,820,1,0,0,0,823,821,1,0,0,0,823,822,1,0,0,0,824,
	69,1,0,0,0,825,828,5,55,0,0,826,827,5,219,0,0,827,829,3,72,36,0,828,826,
	1,0,0,0,828,829,1,0,0,0,829,834,1,0,0,0,830,831,5,219,0,0,831,833,3,78,
	39,0,832,830,1,0,0,0,833,836,1,0,0,0,834,832,1,0,0,0,834,835,1,0,0,0,835,
	71,1,0,0,0,836,834,1,0,0,0,837,838,5,214,0,0,838,73,1,0,0,0,839,840,5,56,
	0,0,840,75,1,0,0,0,841,842,5,57,0,0,842,77,1,0,0,0,843,845,3,524,262,0,
	844,846,5,219,0,0,845,844,1,0,0,0,845,846,1,0,0,0,846,847,1,0,0,0,847,849,
	5,12,0,0,848,850,5,219,0,0,849,848,1,0,0,0,849,850,1,0,0,0,850,851,1,0,
	0,0,851,852,3,524,262,0,852,79,1,0,0,0,853,861,3,98,49,0,854,861,3,82,41,
	0,855,856,5,133,0,0,856,858,5,219,0,0,857,855,1,0,0,0,857,858,1,0,0,0,858,
	859,1,0,0,0,859,861,3,100,50,0,860,853,1,0,0,0,860,854,1,0,0,0,860,857,
	1,0,0,0,861,81,1,0,0,0,862,865,3,84,42,0,863,865,3,86,43,0,864,862,1,0,
	0,0,864,863,1,0,0,0,865,83,1,0,0,0,866,873,3,88,44,0,867,869,5,219,0,0,
	868,867,1,0,0,0,868,869,1,0,0,0,869,870,1,0,0,0,870,872,3,94,47,0,871,868,
	1,0,0,0,872,875,1,0,0,0,873,871,1,0,0,0,873,874,1,0,0,0,874,85,1,0,0,0,
	875,873,1,0,0,0,876,878,3,90,45,0,877,879,5,219,0,0,878,877,1,0,0,0,878,
	879,1,0,0,0,879,880,1,0,0,0,880,881,3,92,46,0,881,87,1,0,0,0,882,889,3,
	96,48,0,883,885,5,219,0,0,884,883,1,0,0,0,884,885,1,0,0,0,885,886,1,0,0,
	0,886,888,3,96,48,0,887,884,1,0,0,0,888,891,1,0,0,0,889,887,1,0,0,0,889,
	890,1,0,0,0,890,89,1,0,0,0,891,889,1,0,0,0,892,893,5,58,0,0,893,894,5,219,
	0,0,894,895,5,59,0,0,895,896,5,219,0,0,896,899,5,60,0,0,897,898,5,219,0,
	0,898,900,3,512,256,0,899,897,1,0,0,0,899,900,1,0,0,0,900,91,1,0,0,0,901,
	908,3,210,105,0,902,904,5,219,0,0,903,902,1,0,0,0,903,904,1,0,0,0,904,905,
	1,0,0,0,905,907,3,96,48,0,906,903,1,0,0,0,907,910,1,0,0,0,908,906,1,0,0,
	0,908,909,1,0,0,0,909,93,1,0,0,0,910,908,1,0,0,0,911,912,5,61,0,0,912,913,
	5,219,0,0,913,915,5,62,0,0,914,916,5,219,0,0,915,914,1,0,0,0,915,916,1,
	0,0,0,916,917,1,0,0,0,917,924,3,88,44,0,918,920,5,61,0,0,919,921,5,219,
	0,0,920,919,1,0,0,0,920,921,1,0,0,0,921,922,1,0,0,0,922,924,3,88,44,0,923,
	911,1,0,0,0,923,918,1,0,0,0,924,95,1,0,0,0,925,941,3,210,105,0,926,941,
	3,282,141,0,927,941,3,212,106,0,928,941,3,214,107,0,929,941,3,216,108,0,
	930,941,3,220,110,0,931,941,3,222,111,0,932,941,3,224,112,0,933,941,3,228,
	114,0,934,941,3,230,115,0,935,941,3,234,117,0,936,941,3,236,118,0,937,941,
	3,238,119,0,938,941,3,250,125,0,939,941,3,252,126,0,940,925,1,0,0,0,940,
	926,1,0,0,0,940,927,1,0,0,0,940,928,1,0,0,0,940,929,1,0,0,0,940,930,1,0,
	0,0,940,931,1,0,0,0,940,932,1,0,0,0,940,933,1,0,0,0,940,934,1,0,0,0,940,
	935,1,0,0,0,940,936,1,0,0,0,940,937,1,0,0,0,940,938,1,0,0,0,940,939,1,0,
	0,0,941,97,1,0,0,0,942,953,3,186,93,0,943,953,3,196,98,0,944,953,3,178,
	89,0,945,953,3,188,94,0,946,953,3,180,90,0,947,953,3,190,95,0,948,953,3,
	182,91,0,949,953,3,192,96,0,950,953,3,184,92,0,951,953,3,194,97,0,952,942,
	1,0,0,0,952,943,1,0,0,0,952,944,1,0,0,0,952,945,1,0,0,0,952,946,1,0,0,0,
	952,947,1,0,0,0,952,948,1,0,0,0,952,949,1,0,0,0,952,950,1,0,0,0,952,951,
	1,0,0,0,953,99,1,0,0,0,954,958,3,102,51,0,955,958,3,104,52,0,956,958,3,
	106,53,0,957,954,1,0,0,0,957,955,1,0,0,0,957,956,1,0,0,0,958,101,1,0,0,
	0,959,965,3,154,77,0,960,965,3,156,78,0,961,965,3,158,79,0,962,965,3,160,
	80,0,963,965,3,162,81,0,964,959,1,0,0,0,964,960,1,0,0,0,964,961,1,0,0,0,
	964,962,1,0,0,0,964,963,1,0,0,0,965,103,1,0,0,0,966,974,3,108,54,0,967,
	974,3,110,55,0,968,974,3,114,57,0,969,974,3,116,58,0,970,974,3,118,59,0,
	971,974,3,120,60,0,972,974,3,122,61,0,973,966,1,0,0,0,973,967,1,0,0,0,973,
	968,1,0,0,0,973,969,1,0,0,0,973,970,1,0,0,0,973,971,1,0,0,0,973,972,1,0,
	0,0,974,105,1,0,0,0,975,980,3,124,62,0,976,980,3,126,63,0,977,980,3,128,
	64,0,978,980,3,130,65,0,979,975,1,0,0,0,979,976,1,0,0,0,979,977,1,0,0,0,
	979,978,1,0,0,0,980,107,1,0,0,0,981,982,5,134,0,0,982,985,5,219,0,0,983,
	984,5,62,0,0,984,986,5,219,0,0,985,983,1,0,0,0,985,986,1,0,0,0,986,987,
	1,0,0,0,987,992,5,145,0,0,988,989,5,219,0,0,989,990,5,74,0,0,990,991,5,
	219,0,0,991,993,5,147,0,0,992,988,1,0,0,0,992,993,1,0,0,0,993,1008,1,0,
	0,0,994,995,5,134,0,0,995,998,5,219,0,0,996,997,5,148,0,0,997,999,5,219,
	0,0,998,996,1,0,0,0,998,999,1,0,0,0,999,1000,1,0,0,0,1000,1005,5,145,0,
	0,1001,1002,5,219,0,0,1002,1003,5,74,0,0,1003,1004,5,219,0,0,1004,1006,
	5,147,0,0,1005,1001,1,0,0,0,1005,1006,1,0,0,0,1006,1008,1,0,0,0,1007,981,
	1,0,0,0,1007,994,1,0,0,0,1008,109,1,0,0,0,1009,1010,5,63,0,0,1010,1011,
	5,219,0,0,1011,1012,5,144,0,0,1012,1013,5,219,0,0,1013,1016,3,524,262,0,
	1014,1015,5,219,0,0,1015,1017,3,164,82,0,1016,1014,1,0,0,0,1016,1017,1,
	0,0,0,1017,1020,1,0,0,0,1018,1019,5,219,0,0,1019,1021,3,112,56,0,1020,1018,
	1,0,0,0,1020,1021,1,0,0,0,1021,1037,1,0,0,0,1022,1023,5,63,0,0,1023,1027,
	5,219,0,0,1024,1025,3,168,84,0,1025,1026,5,219,0,0,1026,1028,1,0,0,0,1027,
	1024,1,0,0,0,1027,1028,1,0,0,0,1028,1029,1,0,0,0,1029,1030,5,144,0,0,1030,
	1031,5,219,0,0,1031,1034,3,524,262,0,1032,1033,5,219,0,0,1033,1035,3,112,
	56,0,1034,1032,1,0,0,0,1034,1035,1,0,0,0,1035,1037,1,0,0,0,1036,1009,1,
	0,0,0,1036,1022,1,0,0,0,1037,111,1,0,0,0,1038,1039,5,77,0,0,1039,1040,5,
	219,0,0,1040,1041,5,166,0,0,1041,1042,5,219,0,0,1042,1043,5,167,0,0,1043,
	1044,5,219,0,0,1044,1045,3,524,262,0,1045,113,1,0,0,0,1046,1047,5,64,0,
	0,1047,1048,5,219,0,0,1048,1049,5,144,0,0,1049,1050,5,219,0,0,1050,1055,
	3,524,262,0,1051,1052,5,219,0,0,1052,1053,5,142,0,0,1053,1054,5,219,0,0,
	1054,1056,5,71,0,0,1055,1051,1,0,0,0,1055,1056,1,0,0,0,1056,115,1,0,0,0,
	1057,1058,5,134,0,0,1058,1059,5,219,0,0,1059,1060,5,147,0,0,1060,117,1,
	0,0,0,1061,1062,5,63,0,0,1062,1063,5,219,0,0,1063,1064,5,146,0,0,1064,1065,
	5,219,0,0,1065,1066,3,30,15,0,1066,1069,5,219,0,0,1067,1068,5,219,0,0,1068,
	1070,3,164,82,0,1069,1067,1,0,0,0,1069,1070,1,0,0,0,1070,1071,1,0,0,0,1071,
	1074,3,170,85,0,1072,1073,5,219,0,0,1073,1075,3,174,87,0,1074,1072,1,0,
	0,0,1074,1075,1,0,0,0,1075,1093,1,0,0,0,1076,1077,5,63,0,0,1077,1081,5,
	219,0,0,1078,1079,3,168,84,0,1079,1080,5,219,0,0,1080,1082,1,0,0,0,1081,
	1078,1,0,0,0,1081,1082,1,0,0,0,1082,1083,1,0,0,0,1083,1084,5,146,0,0,1084,
	1085,5,219,0,0,1085,1086,3,30,15,0,1086,1087,5,219,0,0,1087,1090,3,170,
	85,0,1088,1089,5,219,0,0,1089,1091,3,174,87,0,1090,1088,1,0,0,0,1090,1091,
	1,0,0,0,1091,1093,1,0,0,0,1092,1061,1,0,0,0,1092,1076,1,0,0,0,1093,119,
	1,0,0,0,1094,1095,5,64,0,0,1095,1096,5,219,0,0,1096,1097,5,146,0,0,1097,
	1098,5,219,0,0,1098,1101,3,30,15,0,1099,1100,5,219,0,0,1100,1102,3,166,
	83,0,1101,1099,1,0,0,0,1101,1102,1,0,0,0,1102,121,1,0,0,0,1103,1104,5,155,
	0,0,1104,1105,5,219,0,0,1105,1106,5,156,0,0,1106,1107,5,219,0,0,1107,1108,
	5,146,0,0,1108,1109,5,219,0,0,1109,1110,5,83,0,0,1110,1111,5,219,0,0,1111,
	1112,5,149,0,0,1112,1113,5,219,0,0,1113,1114,5,76,0,0,1114,1117,5,219,0,
	0,1115,1118,3,34,17,0,1116,1118,3,496,248,0,1117,1115,1,0,0,0,1117,1116,
	1,0,0,0,1118,1119,1,0,0,0,1119,1120,5,157,0,0,1120,1123,5,219,0,0,1121,
	1124,3,34,17,0,1122,1124,3,496,248,0,1123,1121,1,0,0,0,1123,1122,1,0,0,
	0,1124,1145,1,0,0,0,1125,1126,5,155,0,0,1126,1127,5,219,0,0,1127,1128,5,
	146,0,0,1128,1129,5,219,0,0,1129,1130,3,30,15,0,1130,1131,5,219,0,0,1131,
	1134,3,170,85,0,1132,1133,5,219,0,0,1133,1135,3,174,87,0,1134,1132,1,0,
	0,0,1134,1135,1,0,0,0,1135,1145,1,0,0,0,1136,1137,5,155,0,0,1137,1138,5,
	219,0,0,1138,1139,5,146,0,0,1139,1140,5,219,0,0,1140,1141,3,30,15,0,1141,
	1142,5,219,0,0,1142,1143,3,174,87,0,1143,1145,1,0,0,0,1144,1103,1,0,0,0,
	1144,1125,1,0,0,0,1144,1136,1,0,0,0,1145,123,1,0,0,0,1146,1147,5,134,0,
	0,1147,1150,5,219,0,0,1148,1149,5,62,0,0,1149,1151,5,219,0,0,1150,1148,
	1,0,0,0,1150,1151,1,0,0,0,1151,1152,1,0,0,0,1152,1174,5,158,0,0,1153,1154,
	5,134,0,0,1154,1160,5,219,0,0,1155,1156,5,144,0,0,1156,1157,5,219,0,0,1157,
	1158,3,524,262,0,1158,1159,5,219,0,0,1159,1161,1,0,0,0,1160,1155,1,0,0,
	0,1160,1161,1,0,0,0,1161,1162,1,0,0,0,1162,1174,5,158,0,0,1163,1164,5,134,
	0,0,1164,1170,5,219,0,0,1165,1166,5,146,0,0,1166,1167,5,219,0,0,1167,1168,
	3,30,15,0,1168,1169,5,219,0,0,1169,1171,1,0,0,0,1170,1165,1,0,0,0,1170,
	1171,1,0,0,0,1171,1172,1,0,0,0,1172,1174,5,158,0,0,1173,1146,1,0,0,0,1173,
	1153,1,0,0,0,1173,1163,1,0,0,0,1174,125,1,0,0,0,1175,1176,5,159,0,0,1176,
	1177,5,219,0,0,1177,1178,5,144,0,0,1178,1179,5,219,0,0,1179,1180,3,138,
	69,0,1180,1181,5,219,0,0,1181,1182,5,157,0,0,1182,1183,5,219,0,0,1183,1184,
	3,30,15,0,1184,1221,1,0,0,0,1185,1186,5,159,0,0,1186,1187,5,219,0,0,1187,
	1188,3,144,72,0,1188,1189,5,219,0,0,1189,1190,5,66,0,0,1190,1191,5,219,
	0,0,1191,1192,3,134,67,0,1192,1193,5,219,0,0,1193,1194,5,157,0,0,1194,1195,
	3,138,69,0,1195,1221,1,0,0,0,1196,1197,5,159,0,0,1197,1198,5,219,0,0,1198,
	1199,3,140,70,0,1199,1200,5,219,0,0,1200,1201,5,66,0,0,1201,1202,5,219,
	0,0,1202,1203,3,136,68,0,1203,1204,5,219,0,0,1204,1205,3,148,74,0,1205,
	1206,5,219,0,0,1206,1207,5,157,0,0,1207,1208,3,138,69,0,1208,1221,1,0,0,
	0,1209,1210,5,159,0,0,1210,1211,5,219,0,0,1211,1212,3,146,73,0,1212,1213,
	5,219,0,0,1213,1214,5,66,0,0,1214,1215,5,219,0,0,1215,1216,5,136,0,0,1216,
	1217,5,219,0,0,1217,1218,5,157,0,0,1218,1219,3,138,69,0,1219,1221,1,0,0,
	0,1220,1175,1,0,0,0,1220,1185,1,0,0,0,1220,1196,1,0,0,0,1220,1209,1,0,0,
	0,1221,127,1,0,0,0,1222,1223,5,160,0,0,1223,1224,5,219,0,0,1224,1225,5,
	144,0,0,1225,1226,5,219,0,0,1226,1227,3,138,69,0,1227,1228,5,219,0,0,1228,
	1229,5,157,0,0,1229,1230,5,219,0,0,1230,1231,3,30,15,0,1231,1268,1,0,0,
	0,1232,1233,5,160,0,0,1233,1234,5,219,0,0,1234,1235,3,144,72,0,1235,1236,
	5,219,0,0,1236,1237,5,66,0,0,1237,1238,5,219,0,0,1238,1239,3,134,67,0,1239,
	1240,5,219,0,0,1240,1241,5,157,0,0,1241,1242,3,138,69,0,1242,1268,1,0,0,
	0,1243,1244,5,160,0,0,1244,1245,5,219,0,0,1245,1246,3,140,70,0,1246,1247,
	5,219,0,0,1247,1248,5,66,0,0,1248,1249,5,219,0,0,1249,1250,3,136,68,0,1250,
	1251,5,219,0,0,1251,1252,3,148,74,0,1252,1253,5,219,0,0,1253,1254,5,157,
	0,0,1254,1255,3,138,69,0,1255,1268,1,0,0,0,1256,1257,5,160,0,0,1257,1258,
	5,219,0,0,1258,1259,3,146,73,0,1259,1260,5,219,0,0,1260,1261,5,66,0,0,1261,
	1262,5,219,0,0,1262,1263,5,136,0,0,1263,1264,5,219,0,0,1264,1265,5,157,
	0,0,1265,1266,3,138,69,0,1266,1268,1,0,0,0,1267,1222,1,0,0,0,1267,1232,
	1,0,0,0,1267,1243,1,0,0,0,1267,1256,1,0,0,0,1268,129,1,0,0,0,1269,1270,
	5,161,0,0,1270,1271,5,219,0,0,1271,1272,5,144,0,0,1272,1273,5,219,0,0,1273,
	1274,3,138,69,0,1274,1275,5,219,0,0,1275,1276,5,76,0,0,1276,1277,5,219,
	0,0,1277,1278,3,30,15,0,1278,1291,1,0,0,0,1279,1282,5,161,0,0,1280,1281,
	5,219,0,0,1281,1283,7,1,0,0,1282,1280,1,0,0,0,1282,1283,1,0,0,0,1283,1284,
	1,0,0,0,1284,1285,3,132,66,0,1285,1286,5,219,0,0,1286,1287,5,76,0,0,1287,
	1288,5,219,0,0,1288,1289,3,138,69,0,1289,1291,1,0,0,0,1290,1269,1,0,0,0,
	1290,1279,1,0,0,0,1291,131,1,0,0,0,1292,1293,3,144,72,0,1293,1294,5,219,
	0,0,1294,1295,5,66,0,0,1295,1296,5,219,0,0,1296,1297,3,134,67,0,1297,1311,
	1,0,0,0,1298,1299,3,142,71,0,1299,1300,5,219,0,0,1300,1301,5,66,0,0,1301,
	1302,5,219,0,0,1302,1303,3,136,68,0,1303,1311,1,0,0,0,1304,1305,3,146,73,
	0,1305,1306,5,219,0,0,1306,1307,5,66,0,0,1307,1308,5,219,0,0,1308,1309,
	5,136,0,0,1309,1311,1,0,0,0,1310,1292,1,0,0,0,1310,1298,1,0,0,0,1310,1304,
	1,0,0,0,1311,133,1,0,0,0,1312,1313,7,2,0,0,1313,1314,5,219,0,0,1314,1332,
	5,19,0,0,1315,1316,7,2,0,0,1316,1317,5,219,0,0,1317,1328,3,524,262,0,1318,
	1320,5,219,0,0,1319,1318,1,0,0,0,1319,1320,1,0,0,0,1320,1321,1,0,0,0,1321,
	1323,5,15,0,0,1322,1324,5,219,0,0,1323,1322,1,0,0,0,1323,1324,1,0,0,0,1324,
	1325,1,0,0,0,1325,1327,3,524,262,0,1326,1319,1,0,0,0,1327,1330,1,0,0,0,
	1328,1326,1,0,0,0,1328,1329,1,0,0,0,1329,1332,1,0,0,0,1330,1328,1,0,0,0,
	1331,1312,1,0,0,0,1331,1315,1,0,0,0,1332,135,1,0,0,0,1333,1334,7,3,0,0,
	1334,1335,5,219,0,0,1335,1353,5,19,0,0,1336,1337,7,3,0,0,1337,1338,5,219,
	0,0,1338,1349,3,524,262,0,1339,1341,5,219,0,0,1340,1339,1,0,0,0,1340,1341,
	1,0,0,0,1341,1342,1,0,0,0,1342,1344,5,15,0,0,1343,1345,5,219,0,0,1344,1343,
	1,0,0,0,1344,1345,1,0,0,0,1345,1346,1,0,0,0,1346,1348,3,524,262,0,1347,
	1340,1,0,0,0,1348,1351,1,0,0,0,1349,1347,1,0,0,0,1349,1350,1,0,0,0,1350,
	1353,1,0,0,0,1351,1349,1,0,0,0,1352,1333,1,0,0,0,1352,1336,1,0,0,0,1353,
	137,1,0,0,0,1354,1365,3,524,262,0,1355,1357,5,219,0,0,1356,1355,1,0,0,0,
	1356,1357,1,0,0,0,1357,1358,1,0,0,0,1358,1360,5,15,0,0,1359,1361,5,219,
	0,0,1360,1359,1,0,0,0,1360,1361,1,0,0,0,1361,1362,1,0,0,0,1362,1364,3,524,
	262,0,1363,1356,1,0,0,0,1364,1367,1,0,0,0,1365,1363,1,0,0,0,1365,1366,1,
	0,0,0,1366,139,1,0,0,0,1367,1365,1,0,0,0,1368,1379,3,142,71,0,1369,1370,
	5,80,0,0,1370,1371,5,219,0,0,1371,1373,5,14,0,0,1372,1374,5,219,0,0,1373,
	1372,1,0,0,0,1373,1374,1,0,0,0,1374,1375,1,0,0,0,1375,1376,3,150,75,0,1376,
	1377,5,16,0,0,1377,1379,1,0,0,0,1378,1368,1,0,0,0,1378,1369,1,0,0,0,1379,
	141,1,0,0,0,1380,1392,5,168,0,0,1381,1382,5,169,0,0,1382,1383,5,219,0,0,
	1383,1385,5,14,0,0,1384,1386,5,219,0,0,1385,1384,1,0,0,0,1385,1386,1,0,
	0,0,1386,1387,1,0,0,0,1387,1388,3,150,75,0,1388,1389,5,16,0,0,1389,1392,
	1,0,0,0,1390,1392,5,170,0,0,1391,1380,1,0,0,0,1391,1381,1,0,0,0,1391,1390,
	1,0,0,0,1392,143,1,0,0,0,1393,1456,5,171,0,0,1394,1456,5,101,0,0,1395,1456,
	5,143,0,0,1396,1397,5,63,0,0,1397,1398,5,219,0,0,1398,1456,7,4,0,0,1399,
	1400,5,64,0,0,1400,1401,5,219,0,0,1401,1456,7,4,0,0,1402,1403,7,4,0,0,1403,
	1404,5,219,0,0,1404,1456,5,173,0,0,1405,1406,5,63,0,0,1406,1407,5,219,0,
	0,1407,1456,7,5,0,0,1408,1409,5,64,0,0,1409,1410,5,219,0,0,1410,1456,7,
	5,0,0,1411,1412,7,5,0,0,1412,1413,5,219,0,0,1413,1456,5,173,0,0,1414,1415,
	5,63,0,0,1415,1416,5,219,0,0,1416,1417,5,174,0,0,1417,1420,5,219,0,0,1418,
	1419,5,102,0,0,1419,1421,5,219,0,0,1420,1418,1,0,0,0,1420,1421,1,0,0,0,
	1421,1422,1,0,0,0,1422,1456,7,6,0,0,1423,1424,5,63,0,0,1424,1425,5,219,
	0,0,1425,1426,5,174,0,0,1426,1429,5,219,0,0,1427,1428,5,103,0,0,1428,1430,
	5,219,0,0,1429,1427,1,0,0,0,1429,1430,1,0,0,0,1430,1431,1,0,0,0,1431,1456,
	7,7,0,0,1432,1433,5,63,0,0,1433,1434,5,219,0,0,1434,1435,5,174,0,0,1435,
	1438,5,219,0,0,1436,1437,5,181,0,0,1437,1439,5,219,0,0,1438,1436,1,0,0,
	0,1438,1439,1,0,0,0,1439,1440,1,0,0,0,1440,1456,7,8,0,0,1441,1444,5,177,
	0,0,1442,1443,5,219,0,0,1443,1445,5,173,0,0,1444,1442,1,0,0,0,1444,1445,
	1,0,0,0,1445,1456,1,0,0,0,1446,1453,5,62,0,0,1447,1450,5,219,0,0,1448,1449,
	5,137,0,0,1449,1451,5,219,0,0,1450,1448,1,0,0,0,1450,1451,1,0,0,0,1451,
	1452,1,0,0,0,1452,1454,5,158,0,0,1453,1447,1,0,0,0,1453,1454,1,0,0,0,1454,
	1456,1,0,0,0,1455,1393,1,0,0,0,1455,1394,1,0,0,0,1455,1395,1,0,0,0,1455,
	1396,1,0,0,0,1455,1399,1,0,0,0,1455,1402,1,0,0,0,1455,1405,1,0,0,0,1455,
	1408,1,0,0,0,1455,1411,1,0,0,0,1455,1414,1,0,0,0,1455,1423,1,0,0,0,1455,
	1432,1,0,0,0,1455,1441,1,0,0,0,1455,1446,1,0,0,0,1456,145,1,0,0,0,1457,
	1458,5,144,0,0,1458,1459,5,219,0,0,1459,1476,5,173,0,0,1460,1461,5,63,0,
	0,1461,1462,5,219,0,0,1462,1476,5,144,0,0,1463,1464,5,64,0,0,1464,1465,
	5,219,0,0,1465,1476,5,144,0,0,1466,1467,5,183,0,0,1467,1468,5,219,0,0,1468,
	1476,5,144,0,0,1469,1470,5,86,0,0,1470,1471,5,219,0,0,1471,1476,5,144,0,
	0,1472,1473,5,134,0,0,1473,1474,5,219,0,0,1474,1476,5,144,0,0,1475,1457,
	1,0,0,0,1475,1460,1,0,0,0,1475,1463,1,0,0,0,1475,1466,1,0,0,0,1475,1469,
	1,0,0,0,1475,1472,1,0,0,0,1476,147,1,0,0,0,1477,1478,7,9,0,0,1478,1479,
	5,219,0,0,1479,1482,3,150,75,0,1480,1481,5,219,0,0,1481,1483,3,152,76,0,
	1482,1480,1,0,0,0,1482,1483,1,0,0,0,1483,1499,1,0,0,0,1484,1485,7,10,0,
	0,1485,1486,5,219,0,0,1486,1489,3,150,75,0,1487,1488,5,219,0,0,1488,1490,
	3,152,76,0,1489,1487,1,0,0,0,1489,1490,1,0,0,0,1490,1499,1,0,0,0,1491,1492,
	7,11,0,0,1492,1493,5,219,0,0,1493,1496,3,150,75,0,1494,1495,5,219,0,0,1495,
	1497,3,152,76,0,1496,1494,1,0,0,0,1496,1497,1,0,0,0,1497,1499,1,0,0,0,1498,
	1477,1,0,0,0,1498,1484,1,0,0,0,1498,1491,1,0,0,0,1499,149,1,0,0,0,1500,
	1516,5,19,0,0,1501,1512,3,524,262,0,1502,1504,5,219,0,0,1503,1502,1,0,0,
	0,1503,1504,1,0,0,0,1504,1505,1,0,0,0,1505,1507,5,15,0,0,1506,1508,5,219,
	0,0,1507,1506,1,0,0,0,1507,1508,1,0,0,0,1508,1509,1,0,0,0,1509,1511,3,524,
	262,0,1510,1503,1,0,0,0,1511,1514,1,0,0,0,1512,1510,1,0,0,0,1512,1513,1,
	0,0,0,1513,1516,1,0,0,0,1514,1512,1,0,0,0,1515,1500,1,0,0,0,1515,1501,1,
	0,0,0,1516,151,1,0,0,0,1517,1519,5,20,0,0,1518,1520,5,219,0,0,1519,1518,
	1,0,0,0,1519,1520,1,0,0,0,1520,1521,1,0,0,0,1521,1523,5,19,0,0,1522,1524,
	5,219,0,0,1523,1522,1,0,0,0,1523,1524,1,0,0,0,1524,1525,1,0,0,0,1525,1526,
	5,21,0,0,1526,153,1,0,0,0,1527,1528,5,134,0,0,1528,1531,5,219,0,0,1529,
	1530,5,135,0,0,1530,1532,5,219,0,0,1531,1529,1,0,0,0,1531,1532,1,0,0,0,
	1532,1533,1,0,0,0,1533,1538,5,137,0,0,1534,1535,5,134,0,0,1535,1536,5,219,
	0,0,1536,1538,5,138,0,0,1537,1527,1,0,0,0,1537,1534,1,0,0,0,1538,155,1,
	0,0,0,1539,1540,5,63,0,0,1540,1541,5,219,0,0,1541,1542,5,137,0,0,1542,1543,
	5,219,0,0,1543,1546,3,524,262,0,1544,1545,5,219,0,0,1545,1547,3,164,82,
	0,1546,1544,1,0,0,0,1546,1547,1,0,0,0,1547,1559,1,0,0,0,1548,1549,5,63,
	0,0,1549,1553,5,219,0,0,1550,1551,3,168,84,0,1551,1552,5,219,0,0,1552,1554,
	1,0,0,0,1553,1550,1,0,0,0,1553,1554,1,0,0,0,1554,1555,1,0,0,0,1555,1556,
	5,137,0,0,1556,1557,5,219,0,0,1557,1559,3,524,262,0,1558,1539,1,0,0,0,1558,
	1548,1,0,0,0,1559,157,1,0,0,0,1560,1561,5,64,0,0,1561,1562,5,219,0,0,1562,
	1563,5,137,0,0,1563,1564,5,219,0,0,1564,1567,3,524,262,0,1565,1566,5,219,
	0,0,1566,1568,3,166,83,0,1567,1565,1,0,0,0,1567,1568,1,0,0,0,1568,159,1,
	0,0,0,1569,1570,5,101,0,0,1570,1571,5,219,0,0,1571,1572,5,137,0,0,1572,
	1573,5,219,0,0,1573,1574,3,524,262,0,1574,161,1,0,0,0,1575,1576,5,143,0,
	0,1576,1577,5,219,0,0,1577,1578,5,137,0,0,1578,1579,5,219,0,0,1579,1580,
	3,524,262,0,1580,163,1,0,0,0,1581,1582,5,142,0,0,1582,1583,5,219,0,0,1583,
	1584,5,111,0,0,1584,1585,5,219,0,0,1585,1586,5,71,0,0,1586,165,1,0,0,0,
	1587,1588,5,142,0,0,1588,1589,5,219,0,0,1589,1590,5,71,0,0,1590,167,1,0,
	0,0,1591,1592,5,108,0,0,1592,1593,5,219,0,0,1593,1594,5,141,0,0,1594,169,
	1,0,0,0,1595,1596,5,83,0,0,1596,1597,5,219,0,0,1597,1598,5,149,0,0,1598,
	1601,5,219,0,0,1599,1602,3,34,17,0,1600,1602,3,496,248,0,1601,1599,1,0,
	0,0,1601,1600,1,0,0,0,1602,1605,1,0,0,0,1603,1604,5,219,0,0,1604,1606,3,
	172,86,0,1605,1603,1,0,0,0,1605,1606,1,0,0,0,1606,1613,1,0,0,0,1607,1608,
	5,83,0,0,1608,1609,5,219,0,0,1609,1610,5,149,0,0,1610,1611,5,219,0,0,1611,
	1613,3,172,86,0,1612,1595,1,0,0,0,1612,1607,1,0,0,0,1613,171,1,0,0,0,1614,
	1615,5,150,0,0,1615,1618,5,219,0,0,1616,1617,5,111,0,0,1617,1619,5,219,
	0,0,1618,1616,1,0,0,0,1618,1619,1,0,0,0,1619,1620,1,0,0,0,1620,1621,5,151,
	0,0,1621,173,1,0,0,0,1622,1623,5,83,0,0,1623,1624,5,219,0,0,1624,1625,5,
	152,0,0,1625,1626,5,219,0,0,1626,1627,3,176,88,0,1627,175,1,0,0,0,1628,
	1629,7,12,0,0,1629,177,1,0,0,0,1630,1631,5,63,0,0,1631,1632,5,219,0,0,1632,
	1633,3,200,100,0,1633,179,1,0,0,0,1634,1635,5,63,0,0,1635,1636,5,219,0,
	0,1636,1637,3,202,101,0,1637,181,1,0,0,0,1638,1639,5,63,0,0,1639,1640,5,
	219,0,0,1640,1641,3,204,102,0,1641,183,1,0,0,0,1642,1643,5,63,0,0,1643,
	1644,5,219,0,0,1644,1645,3,206,103,0,1645,185,1,0,0,0,1646,1647,5,63,0,
	0,1647,1648,5,219,0,0,1648,1649,3,198,99,0,1649,187,1,0,0,0,1650,1651,5,
	64,0,0,1651,1652,5,219,0,0,1652,1653,3,200,100,0,1653,189,1,0,0,0,1654,
	1655,5,64,0,0,1655,1656,5,219,0,0,1656,1657,3,202,101,0,1657,191,1,0,0,
	0,1658,1659,5,64,0,0,1659,1660,5,219,0,0,1660,1661,3,204,102,0,1661,193,
	1,0,0,0,1662,1663,5,64,0,0,1663,1664,5,219,0,0,1664,1665,3,206,103,0,1665,
	195,1,0,0,0,1666,1667,5,64,0,0,1667,1668,5,219,0,0,1668,1669,3,198,99,0,
	1669,197,1,0,0,0,1670,1671,5,65,0,0,1671,1672,5,219,0,0,1672,1674,5,66,
	0,0,1673,1675,5,219,0,0,1674,1673,1,0,0,0,1674,1675,1,0,0,0,1675,1676,1,
	0,0,0,1676,1678,3,350,175,0,1677,1679,5,219,0,0,1678,1677,1,0,0,0,1678,
	1679,1,0,0,0,1679,1680,1,0,0,0,1680,1682,5,20,0,0,1681,1683,5,219,0,0,1682,
	1681,1,0,0,0,1682,1683,1,0,0,0,1683,1684,1,0,0,0,1684,1686,3,508,254,0,
	1685,1687,5,219,0,0,1686,1685,1,0,0,0,1686,1687,1,0,0,0,1687,1688,1,0,0,
	0,1688,1689,5,21,0,0,1689,199,1,0,0,0,1690,1691,5,67,0,0,1691,1692,5,219,
	0,0,1692,1694,5,66,0,0,1693,1695,5,219,0,0,1694,1693,1,0,0,0,1694,1695,
	1,0,0,0,1695,1696,1,0,0,0,1696,1698,5,20,0,0,1697,1699,5,219,0,0,1698,1697,
	1,0,0,0,1698,1699,1,0,0,0,1699,1700,1,0,0,0,1700,1701,3,478,239,0,1701,
	1703,3,350,175,0,1702,1704,5,219,0,0,1703,1702,1,0,0,0,1703,1704,1,0,0,
	0,1704,1705,1,0,0,0,1705,1707,5,21,0,0,1706,1708,5,219,0,0,1707,1706,1,
	0,0,0,1707,1708,1,0,0,0,1708,1709,1,0,0,0,1709,1710,5,68,0,0,1710,1711,
	5,219,0,0,1711,1712,3,506,253,0,1712,1713,5,219,0,0,1713,1714,5,69,0,0,
	1714,1715,5,219,0,0,1715,1716,5,70,0,0,1716,201,1,0,0,0,1717,1718,5,67,
	0,0,1718,1719,5,219,0,0,1719,1721,5,66,0,0,1720,1722,5,219,0,0,1721,1720,
	1,0,0,0,1721,1722,1,0,0,0,1722,1723,1,0,0,0,1723,1725,5,20,0,0,1724,1726,
	5,219,0,0,1725,1724,1,0,0,0,1725,1726,1,0,0,0,1726,1727,1,0,0,0,1727,1728,
	3,478,239,0,1728,1730,3,350,175,0,1729,1731,5,219,0,0,1730,1729,1,0,0,0,
	1730,1731,1,0,0,0,1731,1732,1,0,0,0,1732,1734,5,21,0,0,1733,1735,5,219,
	0,0,1734,1733,1,0,0,0,1734,1735,1,0,0,0,1735,1736,1,0,0,0,1736,1737,5,68,
	0,0,1737,1738,5,219,0,0,1738,1740,5,20,0,0,1739,1741,5,219,0,0,1740,1739,
	1,0,0,0,1740,1741,1,0,0,0,1741,1742,1,0,0,0,1742,1744,3,504,252,0,1743,
	1745,5,219,0,0,1744,1743,1,0,0,0,1744,1745,1,0,0,0,1745,1746,1,0,0,0,1746,
	1747,5,21,0,0,1747,1748,5,219,0,0,1748,1749,5,69,0,0,1749,1750,5,219,0,
	0,1750,1751,5,102,0,0,1751,1752,5,219,0,0,1752,1753,5,132,0,0,1753,203,
	1,0,0,0,1754,1755,5,67,0,0,1755,1756,5,219,0,0,1756,1758,5,66,0,0,1757,
	1759,5,219,0,0,1758,1757,1,0,0,0,1758,1759,1,0,0,0,1759,1760,1,0,0,0,1760,
	1761,5,20,0,0,1761,1762,3,478,239,0,1762,1763,3,350,175,0,1763,1765,5,21,
	0,0,1764,1766,5,219,0,0,1765,1764,1,0,0,0,1765,1766,1,0,0,0,1766,1767,1,
	0,0,0,1767,1768,5,68,0,0,1768,1769,5,219,0,0,1769,1771,5,71,0,0,1770,1772,
	5,219,0,0,1771,1770,1,0,0,0,1771,1772,1,0,0,0,1772,1773,1,0,0,0,1773,1774,
	5,20,0,0,1774,1775,3,506,253,0,1775,1776,5,21,0,0,1776,205,1,0,0,0,1777,
	1778,5,67,0,0,1778,1779,5,219,0,0,1779,1781,5,66,0,0,1780,1782,5,219,0,
	0,1781,1780,1,0,0,0,1781,1782,1,0,0,0,1782,1783,1,0,0,0,1783,1785,3,208,
	104,0,1784,1786,5,219,0,0,1785,1784,1,0,0,0,1785,1786,1,0,0,0,1786,1787,
	1,0,0,0,1787,1788,5,68,0,0,1788,1789,5,219,0,0,1789,1791,5,71,0,0,1790,
	1792,5,219,0,0,1791,1790,1,0,0,0,1791,1792,1,0,0,0,1792,1793,1,0,0,0,1793,
	1794,5,20,0,0,1794,1795,3,506,253,0,1795,1796,5,21,0,0,1796,207,1,0,0,0,
	1797,1799,5,20,0,0,1798,1800,5,219,0,0,1799,1798,1,0,0,0,1799,1800,1,0,
	0,0,1800,1801,1,0,0,0,1801,1802,5,21,0,0,1802,1803,3,522,261,0,1803,1804,
	5,17,0,0,1804,1805,3,478,239,0,1805,1806,3,324,162,0,1806,1807,5,18,0,0,
	1807,1808,3,522,261,0,1808,1810,5,20,0,0,1809,1811,5,219,0,0,1810,1809,
	1,0,0,0,1810,1811,1,0,0,0,1811,1812,1,0,0,0,1812,1813,5,21,0,0,1813,1851,
	1,0,0,0,1814,1816,5,20,0,0,1815,1817,5,219,0,0,1816,1815,1,0,0,0,1816,1817,
	1,0,0,0,1817,1818,1,0,0,0,1818,1819,5,21,0,0,1819,1820,3,522,261,0,1820,
	1821,5,17,0,0,1821,1822,3,478,239,0,1822,1823,3,324,162,0,1823,1824,5,18,
	0,0,1824,1825,3,522,261,0,1825,1826,3,520,260,0,1826,1828,5,20,0,0,1827,
	1829,5,219,0,0,1828,1827,1,0,0,0,1828,1829,1,0,0,0,1829,1830,1,0,0,0,1830,
	1831,5,21,0,0,1831,1851,1,0,0,0,1832,1834,5,20,0,0,1833,1835,5,219,0,0,
	1834,1833,1,0,0,0,1834,1835,1,0,0,0,1835,1836,1,0,0,0,1836,1837,5,21,0,
	0,1837,1838,3,518,259,0,1838,1839,3,522,261,0,1839,1840,5,17,0,0,1840,1841,
	3,478,239,0,1841,1842,3,324,162,0,1842,1843,5,18,0,0,1843,1844,3,522,261,
	0,1844,1846,5,20,0,0,1845,1847,5,219,0,0,1846,1845,1,0,0,0,1846,1847,1,
	0,0,0,1847,1848,1,0,0,0,1848,1849,5,21,0,0,1849,1851,1,0,0,0,1850,1797,
	1,0,0,0,1850,1814,1,0,0,0,1850,1832,1,0,0,0,1851,209,1,0,0,0,1852,1853,
	5,72,0,0,1853,1854,5,219,0,0,1854,1855,5,73,0,0,1855,1860,5,219,0,0,1856,
	1857,5,74,0,0,1857,1858,5,219,0,0,1858,1859,5,75,0,0,1859,1861,5,219,0,
	0,1860,1856,1,0,0,0,1860,1861,1,0,0,0,1861,1862,1,0,0,0,1862,1863,5,76,
	0,0,1863,1864,5,219,0,0,1864,1865,3,372,186,0,1865,1866,5,219,0,0,1866,
	1867,5,77,0,0,1867,1868,5,219,0,0,1868,1869,3,478,239,0,1869,1873,5,219,
	0,0,1870,1871,5,78,0,0,1871,1872,5,219,0,0,1872,1874,5,200,0,0,1873,1870,
	1,0,0,0,1873,1874,1,0,0,0,1874,211,1,0,0,0,1875,1876,5,79,0,0,1876,1878,
	5,219,0,0,1877,1875,1,0,0,0,1877,1878,1,0,0,0,1878,1879,1,0,0,0,1879,1881,
	5,80,0,0,1880,1882,5,219,0,0,1881,1880,1,0,0,0,1881,1882,1,0,0,0,1882,1883,
	1,0,0,0,1883,1887,3,302,151,0,1884,1886,3,280,140,0,1885,1884,1,0,0,0,1886,
	1889,1,0,0,0,1887,1885,1,0,0,0,1887,1888,1,0,0,0,1888,1894,1,0,0,0,1889,
	1887,1,0,0,0,1890,1892,5,219,0,0,1891,1890,1,0,0,0,1891,1892,1,0,0,0,1892,
	1893,1,0,0,0,1893,1895,3,300,150,0,1894,1891,1,0,0,0,1894,1895,1,0,0,0,
	1895,213,1,0,0,0,1896,1898,5,81,0,0,1897,1899,5,219,0,0,1898,1897,1,0,0,
	0,1898,1899,1,0,0,0,1899,1900,1,0,0,0,1900,1901,3,372,186,0,1901,1902,5,
	219,0,0,1902,1903,5,77,0,0,1903,1904,5,219,0,0,1904,1905,3,478,239,0,1905,
	215,1,0,0,0,1906,1908,5,82,0,0,1907,1909,5,219,0,0,1908,1907,1,0,0,0,1908,
	1909,1,0,0,0,1909,1910,1,0,0,0,1910,1915,3,304,152,0,1911,1912,5,219,0,
	0,1912,1914,3,218,109,0,1913,1911,1,0,0,0,1914,1917,1,0,0,0,1915,1913,1,
	0,0,0,1915,1916,1,0,0,0,1916,217,1,0,0,0,1917,1915,1,0,0,0,1918,1919,5,
	66,0,0,1919,1920,5,219,0,0,1920,1921,5,80,0,0,1921,1922,5,219,0,0,1922,
	1929,3,224,112,0,1923,1924,5,66,0,0,1924,1925,5,219,0,0,1925,1926,5,63,
	0,0,1926,1927,5,219,0,0,1927,1929,3,224,112,0,1928,1918,1,0,0,0,1928,1923,
	1,0,0,0,1929,219,1,0,0,0,1930,1932,5,63,0,0,1931,1933,5,219,0,0,1932,1931,
	1,0,0,0,1932,1933,1,0,0,0,1933,1934,1,0,0,0,1934,1935,3,302,151,0,1935,
	221,1,0,0,0,1936,1937,5,63,0,0,1937,1938,5,219,0,0,1938,1940,5,70,0,0,1939,
	1941,5,219,0,0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,
	1943,3,302,151,0,1943,223,1,0,0,0,1944,1946,5,83,0,0,1945,1947,5,219,0,
	0,1946,1945,1,0,0,0,1946,1947,1,0,0,0,1947,1948,1,0,0,0,1948,1959,3,226,
	113,0,1949,1951,5,219,0,0,1950,1949,1,0,0,0,1950,1951,1,0,0,0,1951,1952,
	1,0,0,0,1952,1954,5,15,0,0,1953,1955,5,219,0,0,1954,1953,1,0,0,0,1954,1955,
	1,0,0,0,1955,1956,1,0,0,0,1956,1958,3,226,113,0,1957,1950,1,0,0,0,1958,
	1961,1,0,0,0,1959,1957,1,0,0,0,1959,1960,1,0,0,0,1960,225,1,0,0,0,1961,
	1959,1,0,0,0,1962,1964,3,506,253,0,1963,1965,5,219,0,0,1964,1963,1,0,0,
	0,1964,1965,1,0,0,0,1965,1966,1,0,0,0,1966,1968,5,12,0,0,1967,1969,5,219,
	0,0,1968,1967,1,0,0,0,1968,1969,1,0,0,0,1969,1970,1,0,0,0,1970,1971,3,372,
	186,0,1971,1999,1,0,0,0,1972,1974,3,478,239,0,1973,1975,5,219,0,0,1974,
	1973,1,0,0,0,1974,1975,1,0,0,0,1975,1976,1,0,0,0,1976,1978,5,12,0,0,1977,
	1979,5,219,0,0,1978,1977,1,0,0,0,1978,1979,1,0,0,0,1979,1980,1,0,0,0,1980,
	1981,3,372,186,0,1981,1999,1,0,0,0,1982,1984,3,478,239,0,1983,1985,5,219,
	0,0,1984,1983,1,0,0,0,1984,1985,1,0,0,0,1985,1986,1,0,0,0,1986,1988,5,22,
	0,0,1987,1989,5,219,0,0,1988,1987,1,0,0,0,1988,1989,1,0,0,0,1989,1990,1,
	0,0,0,1990,1991,3,372,186,0,1991,1999,1,0,0,0,1992,1994,3,478,239,0,1993,
	1995,5,219,0,0,1994,1993,1,0,0,0,1994,1995,1,0,0,0,1995,1996,1,0,0,0,1996,
	1997,3,348,174,0,1997,1999,1,0,0,0,1998,1962,1,0,0,0,1998,1972,1,0,0,0,
	1998,1982,1,0,0,0,1998,1992,1,0,0,0,1999,227,1,0,0,0,2000,2001,5,84,0,0,
	2001,2003,5,219,0,0,2002,2000,1,0,0,0,2002,2003,1,0,0,0,2003,2004,1,0,0,
	0,2004,2006,5,85,0,0,2005,2007,5,219,0,0,2006,2005,1,0,0,0,2006,2007,1,
	0,0,0,2007,2008,1,0,0,0,2008,2019,3,372,186,0,2009,2011,5,219,0,0,2010,
	2009,1,0,0,0,2010,2011,1,0,0,0,2011,2012,1,0,0,0,2012,2014,5,15,0,0,2013,
	2015,5,219,0,0,2014,2013,1,0,0,0,2014,2015,1,0,0,0,2015,2016,1,0,0,0,2016,
	2018,3,372,186,0,2017,2010,1,0,0,0,2018,2021,1,0,0,0,2019,2017,1,0,0,0,
	2019,2020,1,0,0,0,2020,229,1,0,0,0,2021,2019,1,0,0,0,2022,2023,5,86,0,0,
	2023,2024,5,219,0,0,2024,2035,3,232,116,0,2025,2027,5,219,0,0,2026,2025,
	1,0,0,0,2026,2027,1,0,0,0,2027,2028,1,0,0,0,2028,2030,5,15,0,0,2029,2031,
	5,219,0,0,2030,2029,1,0,0,0,2030,2031,1,0,0,0,2031,2032,1,0,0,0,2032,2034,
	3,232,116,0,2033,2026,1,0,0,0,2034,2037,1,0,0,0,2035,2033,1,0,0,0,2035,
	2036,1,0,0,0,2036,231,1,0,0,0,2037,2035,1,0,0,0,2038,2039,3,478,239,0,2039,
	2040,3,348,174,0,2040,2043,1,0,0,0,2041,2043,3,506,253,0,2042,2038,1,0,
	0,0,2042,2041,1,0,0,0,2043,233,1,0,0,0,2044,2046,5,87,0,0,2045,2047,5,219,
	0,0,2046,2045,1,0,0,0,2046,2047,1,0,0,0,2047,2048,1,0,0,0,2048,2050,5,20,
	0,0,2049,2051,5,219,0,0,2050,2049,1,0,0,0,2050,2051,1,0,0,0,2051,2052,1,
	0,0,0,2052,2053,3,478,239,0,2053,2054,5,219,0,0,2054,2055,5,88,0,0,2055,
	2056,5,219,0,0,2056,2058,3,372,186,0,2057,2059,5,219,0,0,2058,2057,1,0,
	0,0,2058,2059,1,0,0,0,2059,2060,1,0,0,0,2060,2063,5,23,0,0,2061,2062,5,
	219,0,0,2062,2064,3,96,48,0,2063,2061,1,0,0,0,2064,2065,1,0,0,0,2065,2063,
	1,0,0,0,2065,2066,1,0,0,0,2066,2068,1,0,0,0,2067,2069,5,219,0,0,2068,2067,
	1,0,0,0,2068,2069,1,0,0,0,2069,2070,1,0,0,0,2070,2071,5,21,0,0,2071,235,
	1,0,0,0,2072,2077,5,74,0,0,2073,2075,5,219,0,0,2074,2073,1,0,0,0,2074,2075,
	1,0,0,0,2075,2076,1,0,0,0,2076,2078,5,89,0,0,2077,2074,1,0,0,0,2077,2078,
	1,0,0,0,2078,2079,1,0,0,0,2079,2080,5,219,0,0,2080,2085,3,240,120,0,2081,
	2083,5,219,0,0,2082,2081,1,0,0,0,2082,2083,1,0,0,0,2083,2084,1,0,0,0,2084,
	2086,3,300,150,0,2085,2082,1,0,0,0,2085,2086,1,0,0,0,2086,237,1,0,0,0,2087,
	2092,5,90,0,0,2088,2090,5,219,0,0,2089,2088,1,0,0,0,2089,2090,1,0,0,0,2090,
	2091,1,0,0,0,2091,2093,5,89,0,0,2092,2089,1,0,0,0,2092,2093,1,0,0,0,2093,
	2095,1,0,0,0,2094,2096,5,219,0,0,2095,2094,1,0,0,0,2095,2096,1,0,0,0,2096,
	2097,1,0,0,0,2097,2098,3,240,120,0,2098,239,1,0,0,0,2099,2102,3,244,122,
	0,2100,2101,5,219,0,0,2101,2103,3,272,136,0,2102,2100,1,0,0,0,2102,2103,
	1,0,0,0,2103,2106,1,0,0,0,2104,2105,5,219,0,0,2105,2107,3,274,137,0,2106,
	2104,1,0,0,0,2106,2107,1,0,0,0,2107,2110,1,0,0,0,2108,2109,5,219,0,0,2109,
	2111,3,276,138,0,2110,2108,1,0,0,0,2110,2111,1,0,0,0,2111,241,1,0,0,0,2112,
	2114,3,256,128,0,2113,2115,5,219,0,0,2114,2113,1,0,0,0,2114,2115,1,0,0,
	0,2115,2117,1,0,0,0,2116,2118,3,262,131,0,2117,2116,1,0,0,0,2117,2118,1,
	0,0,0,2118,243,1,0,0,0,2119,2130,5,19,0,0,2120,2122,5,219,0,0,2121,2120,
	1,0,0,0,2121,2122,1,0,0,0,2122,2123,1,0,0,0,2123,2125,5,15,0,0,2124,2126,
	5,219,0,0,2125,2124,1,0,0,0,2125,2126,1,0,0,0,2126,2127,1,0,0,0,2127,2129,
	3,246,123,0,2128,2121,1,0,0,0,2129,2132,1,0,0,0,2130,2128,1,0,0,0,2130,
	2131,1,0,0,0,2131,2149,1,0,0,0,2132,2130,1,0,0,0,2133,2144,3,246,123,0,
	2134,2136,5,219,0,0,2135,2134,1,0,0,0,2135,2136,1,0,0,0,2136,2137,1,0,0,
	0,2137,2139,5,15,0,0,2138,2140,5,219,0,0,2139,2138,1,0,0,0,2139,2140,1,
	0,0,0,2140,2141,1,0,0,0,2141,2143,3,246,123,0,2142,2135,1,0,0,0,2143,2146,
	1,0,0,0,2144,2142,1,0,0,0,2144,2145,1,0,0,0,2145,2149,1,0,0,0,2146,2144,
	1,0,0,0,2147,2149,3,242,121,0,2148,2119,1,0,0,0,2148,2133,1,0,0,0,2148,
	2147,1,0,0,0,2149,245,1,0,0,0,2150,2153,3,248,124,0,2151,2153,3,372,186,
	0,2152,2150,1,0,0,0,2152,2151,1,0,0,0,2153,247,1,0,0,0,2154,2155,3,372,
	186,0,2155,2156,5,219,0,0,2156,2157,5,77,0,0,2157,2158,5,219,0,0,2158,2159,
	3,478,239,0,2159,249,1,0,0,0,2160,2161,5,130,0,0,2161,2162,5,219,0,0,2162,
	2164,3,256,128,0,2163,2165,5,219,0,0,2164,2163,1,0,0,0,2164,2165,1,0,0,
	0,2165,2167,1,0,0,0,2166,2168,3,262,131,0,2167,2166,1,0,0,0,2167,2168,1,
	0,0,0,2168,251,1,0,0,0,2169,2171,5,130,0,0,2170,2172,5,219,0,0,2171,2170,
	1,0,0,0,2171,2172,1,0,0,0,2172,2173,1,0,0,0,2173,2174,3,254,127,0,2174,
	253,1,0,0,0,2175,2177,5,14,0,0,2176,2178,5,219,0,0,2177,2176,1,0,0,0,2177,
	2178,1,0,0,0,2178,2180,1,0,0,0,2179,2181,3,82,41,0,2180,2179,1,0,0,0,2180,
	2181,1,0,0,0,2181,2183,1,0,0,0,2182,2184,5,219,0,0,2183,2182,1,0,0,0,2183,
	2184,1,0,0,0,2184,2185,1,0,0,0,2185,2186,5,16,0,0,2186,255,1,0,0,0,2187,
	2189,3,258,129,0,2188,2190,5,219,0,0,2189,2188,1,0,0,0,2189,2190,1,0,0,
	0,2190,2192,1,0,0,0,2191,2193,3,260,130,0,2192,2191,1,0,0,0,2192,2193,1,
	0,0,0,2193,257,1,0,0,0,2194,2195,3,516,258,0,2195,2196,3,466,233,0,2196,
	259,1,0,0,0,2197,2199,5,20,0,0,2198,2200,5,219,0,0,2199,2198,1,0,0,0,2199,
	2200,1,0,0,0,2200,2202,1,0,0,0,2201,2203,3,372,186,0,2202,2201,1,0,0,0,
	2202,2203,1,0,0,0,2203,2214,1,0,0,0,2204,2206,5,219,0,0,2205,2204,1,0,0,
	0,2205,2206,1,0,0,0,2206,2207,1,0,0,0,2207,2209,5,15,0,0,2208,2210,5,219,
	0,0,2209,2208,1,0,0,0,2209,2210,1,0,0,0,2210,2211,1,0,0,0,2211,2213,3,372,
	186,0,2212,2205,1,0,0,0,2213,2216,1,0,0,0,2214,2212,1,0,0,0,2214,2215,1,
	0,0,0,2215,2218,1,0,0,0,2216,2214,1,0,0,0,2217,2219,5,219,0,0,2218,2217,
	1,0,0,0,2218,2219,1,0,0,0,2219,2220,1,0,0,0,2220,2221,5,21,0,0,2221,261,
	1,0,0,0,2222,2223,5,131,0,0,2223,2224,5,219,0,0,2224,2235,3,264,132,0,2225,
	2227,5,219,0,0,2226,2225,1,0,0,0,2226,2227,1,0,0,0,2227,2228,1,0,0,0,2228,
	2230,5,15,0,0,2229,2231,5,219,0,0,2230,2229,1,0,0,0,2230,2231,1,0,0,0,2231,
	2232,1,0,0,0,2232,2234,3,264,132,0,2233,2226,1,0,0,0,2234,2237,1,0,0,0,
	2235,2233,1,0,0,0,2235,2236,1,0,0,0,2236,2240,1,0,0,0,2237,2235,1,0,0,0,
	2238,2239,5,219,0,0,2239,2241,3,300,150,0,2240,2238,1,0,0,0,2240,2241,1,
	0,0,0,2241,263,1,0,0,0,2242,2245,3,266,133,0,2243,2245,3,268,134,0,2244,
	2242,1,0,0,0,2244,2243,1,0,0,0,2245,265,1,0,0,0,2246,2247,3,270,135,0,2247,
	2248,5,219,0,0,2248,2249,5,77,0,0,2249,2250,5,219,0,0,2250,2251,3,478,239,
	0,2251,267,1,0,0,0,2252,2253,3,270,135,0,2253,269,1,0,0,0,2254,2255,3,524,
	262,0,2255,271,1,0,0,0,2256,2257,5,91,0,0,2257,2258,5,219,0,0,2258,2259,
	5,92,0,0,2259,2260,5,219,0,0,2260,2271,3,278,139,0,2261,2263,5,219,0,0,
	2262,2261,1,0,0,0,2262,2263,1,0,0,0,2263,2264,1,0,0,0,2264,2266,5,15,0,
	0,2265,2267,5,219,0,0,2266,2265,1,0,0,0,2266,2267,1,0,0,0,2267,2268,1,0,
	0,0,2268,2270,3,278,139,0,2269,2262,1,0,0,0,2270,2273,1,0,0,0,2271,2269,
	1,0,0,0,2271,2272,1,0,0,0,2272,273,1,0,0,0,2273,2271,1,0,0,0,2274,2275,
	5,93,0,0,2275,2276,5,219,0,0,2276,2277,3,372,186,0,2277,275,1,0,0,0,2278,
	2279,5,94,0,0,2279,2280,5,219,0,0,2280,2281,3,372,186,0,2281,277,1,0,0,
	0,2282,2290,3,372,186,0,2283,2285,5,219,0,0,2284,2283,1,0,0,0,2284,2285,
	1,0,0,0,2285,2286,1,0,0,0,2286,2288,7,13,0,0,2287,2289,5,219,0,0,2288,2287,
	1,0,0,0,2288,2289,1,0,0,0,2289,2291,1,0,0,0,2290,2284,1,0,0,0,2290,2291,
	1,0,0,0,2291,279,1,0,0,0,2292,2294,5,219,0,0,2293,2292,1,0,0,0,2293,2294,
	1,0,0,0,2294,2341,1,0,0,0,2295,2296,5,58,0,0,2296,2297,5,219,0,0,2297,2298,
	5,65,0,0,2298,2299,5,219,0,0,2299,2300,3,478,239,0,2300,2302,3,350,175,
	0,2301,2303,5,219,0,0,2302,2301,1,0,0,0,2302,2303,1,0,0,0,2303,2304,1,0,
	0,0,2304,2306,5,20,0,0,2305,2307,5,219,0,0,2306,2305,1,0,0,0,2306,2307,
	1,0,0,0,2307,2308,1,0,0,0,2308,2310,3,508,254,0,2309,2311,5,219,0,0,2310,
	2309,1,0,0,0,2310,2311,1,0,0,0,2311,2312,1,0,0,0,2312,2313,5,21,0,0,2313,
	2342,1,0,0,0,2314,2315,5,58,0,0,2315,2316,5,219,0,0,2316,2317,5,99,0,0,
	2317,2318,5,219,0,0,2318,2319,5,66,0,0,2319,2320,5,219,0,0,2320,2331,3,
	478,239,0,2321,2323,5,219,0,0,2322,2321,1,0,0,0,2322,2323,1,0,0,0,2323,
	2324,1,0,0,0,2324,2326,5,15,0,0,2325,2327,5,219,0,0,2326,2325,1,0,0,0,2326,
	2327,1,0,0,0,2327,2328,1,0,0,0,2328,2330,3,478,239,0,2329,2322,1,0,0,0,
	2330,2333,1,0,0,0,2331,2329,1,0,0,0,2331,2332,1,0,0,0,2332,2342,1,0,0,0,
	2333,2331,1,0,0,0,2334,2335,5,58,0,0,2335,2336,5,219,0,0,2336,2337,5,100,
	0,0,2337,2338,5,219,0,0,2338,2339,3,478,239,0,2339,2340,3,350,175,0,2340,
	2342,1,0,0,0,2341,2295,1,0,0,0,2341,2314,1,0,0,0,2341,2334,1,0,0,0,2342,
	281,1,0,0,0,2343,2344,5,101,0,0,2344,2345,5,219,0,0,2345,2356,3,284,142,
	0,2346,2348,5,219,0,0,2347,2346,1,0,0,0,2347,2348,1,0,0,0,2348,2349,1,0,
	0,0,2349,2351,5,15,0,0,2350,2352,5,219,0,0,2351,2350,1,0,0,0,2351,2352,
	1,0,0,0,2352,2353,1,0,0,0,2353,2355,3,284,142,0,2354,2347,1,0,0,0,2355,
	2358,1,0,0,0,2356,2354,1,0,0,0,2356,2357,1,0,0,0,2357,2360,1,0,0,0,2358,
	2356,1,0,0,0,2359,2361,3,300,150,0,2360,2359,1,0,0,0,2360,2361,1,0,0,0,
	2361,283,1,0,0,0,2362,2364,3,478,239,0,2363,2365,5,219,0,0,2364,2363,1,
	0,0,0,2364,2365,1,0,0,0,2365,2366,1,0,0,0,2366,2368,5,12,0,0,2367,2369,
	5,219,0,0,2368,2367,1,0,0,0,2368,2369,1,0,0,0,2369,2370,1,0,0,0,2370,2371,
	3,286,143,0,2371,285,1,0,0,0,2372,2375,3,288,144,0,2373,2375,3,290,145,
	0,2374,2372,1,0,0,0,2374,2373,1,0,0,0,2375,287,1,0,0,0,2376,2378,5,102,
	0,0,2377,2379,5,219,0,0,2378,2377,1,0,0,0,2378,2379,1,0,0,0,2379,2383,1,
	0,0,0,2380,2384,3,292,146,0,2381,2384,3,294,147,0,2382,2384,3,296,148,0,
	2383,2380,1,0,0,0,2383,2381,1,0,0,0,2383,2382,1,0,0,0,2384,289,1,0,0,0,
	2385,2389,7,14,0,0,2386,2390,3,292,146,0,2387,2390,3,294,147,0,2388,2390,
	3,296,148,0,2389,2386,1,0,0,0,2389,2387,1,0,0,0,2389,2388,1,0,0,0,2390,
	291,1,0,0,0,2391,2392,5,2,0,0,2392,2393,3,524,262,0,2393,2394,5,20,0,0,
	2394,2395,3,524,262,0,2395,2398,5,12,0,0,2396,2399,5,200,0,0,2397,2399,
	3,496,248,0,2398,2396,1,0,0,0,2398,2397,1,0,0,0,2399,2400,1,0,0,0,2400,
	2401,5,21,0,0,2401,293,1,0,0,0,2402,2403,5,2,0,0,2403,2404,3,524,262,0,
	2404,2407,5,20,0,0,2405,2408,5,200,0,0,2406,2408,3,496,248,0,2407,2405,
	1,0,0,0,2407,2406,1,0,0,0,2408,2409,1,0,0,0,2409,2410,5,21,0,0,2410,295,
	1,0,0,0,2411,2415,5,20,0,0,2412,2416,3,298,149,0,2413,2416,3,496,248,0,
	2414,2416,5,19,0,0,2415,2412,1,0,0,0,2415,2413,1,0,0,0,2415,2414,1,0,0,
	0,2416,2417,1,0,0,0,2417,2418,5,21,0,0,2418,297,1,0,0,0,2419,2430,3,512,
	256,0,2420,2422,5,219,0,0,2421,2420,1,0,0,0,2421,2422,1,0,0,0,2422,2423,
	1,0,0,0,2423,2425,5,15,0,0,2424,2426,5,219,0,0,2425,2424,1,0,0,0,2425,2426,
	1,0,0,0,2426,2427,1,0,0,0,2427,2429,3,512,256,0,2428,2421,1,0,0,0,2429,
	2432,1,0,0,0,2430,2428,1,0,0,0,2430,2431,1,0,0,0,2431,299,1,0,0,0,2432,
	2430,1,0,0,0,2433,2434,5,105,0,0,2434,2435,5,219,0,0,2435,2436,3,372,186,
	0,2436,301,1,0,0,0,2437,2448,3,304,152,0,2438,2440,5,219,0,0,2439,2438,
	1,0,0,0,2439,2440,1,0,0,0,2440,2441,1,0,0,0,2441,2443,5,15,0,0,2442,2444,
	5,219,0,0,2443,2442,1,0,0,0,2443,2444,1,0,0,0,2444,2445,1,0,0,0,2445,2447,
	3,304,152,0,2446,2439,1,0,0,0,2447,2450,1,0,0,0,2448,2446,1,0,0,0,2448,
	2449,1,0,0,0,2449,303,1,0,0,0,2450,2448,1,0,0,0,2451,2453,3,478,239,0,2452,
	2454,5,219,0,0,2453,2452,1,0,0,0,2453,2454,1,0,0,0,2454,2455,1,0,0,0,2455,
	2457,5,12,0,0,2456,2458,5,219,0,0,2457,2456,1,0,0,0,2457,2458,1,0,0,0,2458,
	2459,1,0,0,0,2459,2460,3,306,153,0,2460,2463,1,0,0,0,2461,2463,3,306,153,
	0,2462,2451,1,0,0,0,2462,2461,1,0,0,0,2463,305,1,0,0,0,2464,2467,3,434,
	217,0,2465,2467,3,308,154,0,2466,2464,1,0,0,0,2466,2465,1,0,0,0,2467,307,
	1,0,0,0,2468,2475,3,310,155,0,2469,2471,5,219,0,0,2470,2469,1,0,0,0,2470,
	2471,1,0,0,0,2471,2472,1,0,0,0,2472,2474,3,312,156,0,2473,2470,1,0,0,0,
	2474,2477,1,0,0,0,2475,2473,1,0,0,0,2475,2476,1,0,0,0,2476,2483,1,0,0,0,
	2477,2475,1,0,0,0,2478,2479,5,20,0,0,2479,2480,3,308,154,0,2480,2481,5,
	21,0,0,2481,2483,1,0,0,0,2482,2468,1,0,0,0,2482,2478,1,0,0,0,2483,309,1,
	0,0,0,2484,2486,5,20,0,0,2485,2487,5,219,0,0,2486,2485,1,0,0,0,2486,2487,
	1,0,0,0,2487,2492,1,0,0,0,2488,2490,3,478,239,0,2489,2491,5,219,0,0,2490,
	2489,1,0,0,0,2490,2491,1,0,0,0,2491,2493,1,0,0,0,2492,2488,1,0,0,0,2492,
	2493,1,0,0,0,2493,2498,1,0,0,0,2494,2496,3,348,174,0,2495,2497,5,219,0,
	0,2496,2495,1,0,0,0,2496,2497,1,0,0,0,2497,2499,1,0,0,0,2498,2494,1,0,0,
	0,2498,2499,1,0,0,0,2499,2504,1,0,0,0,2500,2502,3,322,161,0,2501,2503,5,
	219,0,0,2502,2501,1,0,0,0,2502,2503,1,0,0,0,2503,2505,1,0,0,0,2504,2500,
	1,0,0,0,2504,2505,1,0,0,0,2505,2506,1,0,0,0,2506,2507,5,21,0,0,2507,311,
	1,0,0,0,2508,2510,3,314,157,0,2509,2511,5,219,0,0,2510,2509,1,0,0,0,2510,
	2511,1,0,0,0,2511,2512,1,0,0,0,2512,2513,3,310,155,0,2513,313,1,0,0,0,2514,
	2516,3,316,158,0,2515,2517,5,219,0,0,2516,2515,1,0,0,0,2516,2517,1,0,0,
	0,2517,2519,1,0,0,0,2518,2520,3,320,160,0,2519,2518,1,0,0,0,2519,2520,1,
	0,0,0,2520,2522,1,0,0,0,2521,2523,5,219,0,0,2522,2521,1,0,0,0,2522,2523,
	1,0,0,0,2523,2524,1,0,0,0,2524,2525,3,318,159,0,2525,315,1,0,0,0,2526,2528,
	3,518,259,0,2527,2529,5,219,0,0,2528,2527,1,0,0,0,2528,2529,1,0,0,0,2529,
	2530,1,0,0,0,2530,2531,3,522,261,0,2531,2534,1,0,0,0,2532,2534,3,522,261,
	0,2533,2526,1,0,0,0,2533,2532,1,0,0,0,2534,317,1,0,0,0,2535,2537,3,522,
	261,0,2536,2538,5,219,0,0,2537,2536,1,0,0,0,2537,2538,1,0,0,0,2538,2539,
	1,0,0,0,2539,2540,3,520,260,0,2540,2543,1,0,0,0,2541,2543,3,522,261,0,2542,
	2535,1,0,0,0,2542,2541,1,0,0,0,2543,319,1,0,0,0,2544,2546,5,17,0,0,2545,
	2547,5,219,0,0,2546,2545,1,0,0,0,2546,2547,1,0,0,0,2547,2552,1,0,0,0,2548,
	2550,3,478,239,0,2549,2551,5,219,0,0,2550,2549,1,0,0,0,2550,2551,1,0,0,
	0,2551,2553,1,0,0,0,2552,2548,1,0,0,0,2552,2553,1,0,0,0,2553,2558,1,0,0,
	0,2554,2556,3,340,170,0,2555,2557,5,219,0,0,2556,2555,1,0,0,0,2556,2557,
	1,0,0,0,2557,2559,1,0,0,0,2558,2554,1,0,0,0,2558,2559,1,0,0,0,2559,2561,
	1,0,0,0,2560,2562,3,366,183,0,2561,2560,1,0,0,0,2561,2562,1,0,0,0,2562,
	2567,1,0,0,0,2563,2565,3,322,161,0,2564,2566,5,219,0,0,2565,2564,1,0,0,
	0,2565,2566,1,0,0,0,2566,2568,1,0,0,0,2567,2563,1,0,0,0,2567,2568,1,0,0,
	0,2568,2569,1,0,0,0,2569,2570,5,18,0,0,2570,321,1,0,0,0,2571,2574,3,482,
	241,0,2572,2574,3,496,248,0,2573,2571,1,0,0,0,2573,2572,1,0,0,0,2574,323,
	1,0,0,0,2575,2577,5,2,0,0,2576,2578,5,219,0,0,2577,2576,1,0,0,0,2577,2578,
	1,0,0,0,2578,2579,1,0,0,0,2579,2580,3,370,185,0,2580,325,1,0,0,0,2581,2584,
	3,338,169,0,2582,2584,3,370,185,0,2583,2581,1,0,0,0,2583,2582,1,0,0,0,2584,
	327,1,0,0,0,2585,2590,3,370,185,0,2586,2590,3,332,166,0,2587,2590,3,330,
	165,0,2588,2590,3,338,169,0,2589,2585,1,0,0,0,2589,2586,1,0,0,0,2589,2587,
	1,0,0,0,2589,2588,1,0,0,0,2590,329,1,0,0,0,2591,2592,5,24,0,0,2592,331,
	1,0,0,0,2593,2604,3,334,167,0,2594,2596,5,219,0,0,2595,2594,1,0,0,0,2595,
	2596,1,0,0,0,2596,2597,1,0,0,0,2597,2599,5,23,0,0,2598,2600,5,219,0,0,2599,
	2598,1,0,0,0,2599,2600,1,0,0,0,2600,2601,1,0,0,0,2601,2603,3,334,167,0,
	2602,2595,1,0,0,0,2603,2606,1,0,0,0,2604,2602,1,0,0,0,2604,2605,1,0,0,0,
	2605,333,1,0,0,0,2606,2604,1,0,0,0,2607,2618,3,336,168,0,2608,2610,5,219,
	0,0,2609,2608,1,0,0,0,2609,2610,1,0,0,0,2610,2611,1,0,0,0,2611,2613,5,11,
	0,0,2612,2614,5,219,0,0,2613,2612,1,0,0,0,2613,2614,1,0,0,0,2614,2615,1,
	0,0,0,2615,2617,3,336,168,0,2616,2609,1,0,0,0,2617,2620,1,0,0,0,2618,2616,
	1,0,0,0,2618,2619,1,0,0,0,2619,335,1,0,0,0,2620,2618,1,0,0,0,2621,2623,
	3,344,172,0,2622,2621,1,0,0,0,2623,2626,1,0,0,0,2624,2622,1,0,0,0,2624,
	2625,1,0,0,0,2625,2628,1,0,0,0,2626,2624,1,0,0,0,2627,2629,5,219,0,0,2628,
	2627,1,0,0,0,2628,2629,1,0,0,0,2629,2630,1,0,0,0,2630,2631,3,326,163,0,
	2631,337,1,0,0,0,2632,2634,5,20,0,0,2633,2635,5,219,0,0,2634,2633,1,0,0,
	0,2634,2635,1,0,0,0,2635,2636,1,0,0,0,2636,2638,3,328,164,0,2637,2639,5,
	219,0,0,2638,2637,1,0,0,0,2638,2639,1,0,0,0,2639,2640,1,0,0,0,2640,2641,
	5,21,0,0,2641,339,1,0,0,0,2642,2650,3,342,171,0,2643,2645,5,219,0,0,2644,
	2643,1,0,0,0,2644,2645,1,0,0,0,2645,2646,1,0,0,0,2646,2647,5,23,0,0,2647,
	2649,3,346,173,0,2648,2644,1,0,0,0,2649,2652,1,0,0,0,2650,2648,1,0,0,0,
	2650,2651,1,0,0,0,2651,341,1,0,0,0,2652,2650,1,0,0,0,2653,2654,5,2,0,0,
	2654,2655,3,328,164,0,2655,343,1,0,0,0,2656,2657,5,25,0,0,2657,345,1,0,
	0,0,2658,2660,5,2,0,0,2659,2658,1,0,0,0,2659,2660,1,0,0,0,2660,2661,1,0,
	0,0,2661,2662,3,370,185,0,2662,347,1,0,0,0,2663,2670,3,350,175,0,2664,2666,
	5,219,0,0,2665,2664,1,0,0,0,2665,2666,1,0,0,0,2666,2667,1,0,0,0,2667,2669,
	3,350,175,0,2668,2665,1,0,0,0,2669,2672,1,0,0,0,2670,2668,1,0,0,0,2670,
	2671,1,0,0,0,2671,349,1,0,0,0,2672,2670,1,0,0,0,2673,2674,5,2,0,0,2674,
	2675,3,354,177,0,2675,351,1,0,0,0,2676,2679,3,364,182,0,2677,2679,3,368,
	184,0,2678,2676,1,0,0,0,2678,2677,1,0,0,0,2679,353,1,0,0,0,2680,2685,3,
	368,184,0,2681,2685,3,358,179,0,2682,2685,3,356,178,0,2683,2685,3,364,182,
	0,2684,2680,1,0,0,0,2684,2681,1,0,0,0,2684,2682,1,0,0,0,2684,2683,1,0,0,
	0,2685,355,1,0,0,0,2686,2687,5,24,0,0,2687,357,1,0,0,0,2688,2699,3,360,
	180,0,2689,2691,5,219,0,0,2690,2689,1,0,0,0,2690,2691,1,0,0,0,2691,2692,
	1,0,0,0,2692,2694,5,23,0,0,2693,2695,5,219,0,0,2694,2693,1,0,0,0,2694,2695,
	1,0,0,0,2695,2696,1,0,0,0,2696,2698,3,360,180,0,2697,2690,1,0,0,0,2698,
	2701,1,0,0,0,2699,2697,1,0,0,0,2699,2700,1,0,0,0,2700,359,1,0,0,0,2701,
	2699,1,0,0,0,2702,2713,3,362,181,0,2703,2705,5,219,0,0,2704,2703,1,0,0,
	0,2704,2705,1,0,0,0,2705,2706,1,0,0,0,2706,2708,5,11,0,0,2707,2709,5,219,
	0,0,2708,2707,1,0,0,0,2708,2709,1,0,0,0,2709,2710,1,0,0,0,2710,2712,3,362,
	181,0,2711,2704,1,0,0,0,2712,2715,1,0,0,0,2713,2711,1,0,0,0,2713,2714,1,
	0,0,0,2714,361,1,0,0,0,2715,2713,1,0,0,0,2716,2718,3,344,172,0,2717,2716,
	1,0,0,0,2718,2721,1,0,0,0,2719,2717,1,0,0,0,2719,2720,1,0,0,0,2720,2723,
	1,0,0,0,2721,2719,1,0,0,0,2722,2724,5,219,0,0,2723,2722,1,0,0,0,2723,2724,
	1,0,0,0,2724,2725,1,0,0,0,2725,2726,3,352,176,0,2726,363,1,0,0,0,2727,2729,
	5,20,0,0,2728,2730,5,219,0,0,2729,2728,1,0,0,0,2729,2730,1,0,0,0,2730,2731,
	1,0,0,0,2731,2733,3,354,177,0,2732,2734,5,219,0,0,2733,2732,1,0,0,0,2733,
	2734,1,0,0,0,2734,2735,1,0,0,0,2735,2736,5,21,0,0,2736,365,1,0,0,0,2737,
	2739,5,19,0,0,2738,2740,5,219,0,0,2739,2738,1,0,0,0,2739,2740,1,0,0,0,2740,
	2745,1,0,0,0,2741,2743,3,512,256,0,2742,2744,5,219,0,0,2743,2742,1,0,0,
	0,2743,2744,1,0,0,0,2744,2746,1,0,0,0,2745,2741,1,0,0,0,2745,2746,1,0,0,
	0,2746,2757,1,0,0,0,2747,2749,5,26,0,0,2748,2750,5,219,0,0,2749,2748,1,
	0,0,0,2749,2750,1,0,0,0,2750,2755,1,0,0,0,2751,2753,3,512,256,0,2752,2754,
	5,219,0,0,2753,2752,1,0,0,0,2753,2754,1,0,0,0,2754,2756,1,0,0,0,2755,2751,
	1,0,0,0,2755,2756,1,0,0,0,2756,2758,1,0,0,0,2757,2747,1,0,0,0,2757,2758,
	1,0,0,0,2758,367,1,0,0,0,2759,2760,3,524,262,0,2760,369,1,0,0,0,2761,2762,
	3,524,262,0,2762,371,1,0,0,0,2763,2764,3,380,190,0,2764,373,1,0,0,0,2765,
	2767,5,71,0,0,2766,2768,5,219,0,0,2767,2766,1,0,0,0,2767,2768,1,0,0,0,2768,
	2769,1,0,0,0,2769,2770,3,376,188,0,2770,375,1,0,0,0,2771,2774,3,254,127,
	0,2772,2774,3,378,189,0,2773,2771,1,0,0,0,2773,2772,1,0,0,0,2774,377,1,
	0,0,0,2775,2777,5,14,0,0,2776,2778,5,219,0,0,2777,2776,1,0,0,0,2777,2778,
	1,0,0,0,2778,2779,1,0,0,0,2779,2783,3,302,151,0,2780,2782,3,280,140,0,2781,
	2780,1,0,0,0,2782,2785,1,0,0,0,2783,2781,1,0,0,0,2783,2784,1,0,0,0,2784,
	2790,1,0,0,0,2785,2783,1,0,0,0,2786,2788,5,219,0,0,2787,2786,1,0,0,0,2787,
	2788,1,0,0,0,2788,2789,1,0,0,0,2789,2791,3,300,150,0,2790,2787,1,0,0,0,
	2790,2791,1,0,0,0,2791,2793,1,0,0,0,2792,2794,5,219,0,0,2793,2792,1,0,0,
	0,2793,2794,1,0,0,0,2794,2795,1,0,0,0,2795,2796,5,16,0,0,2796,379,1,0,0,
	0,2797,2804,3,382,191,0,2798,2799,5,219,0,0,2799,2800,5,108,0,0,2800,2801,
	5,219,0,0,2801,2803,3,382,191,0,2802,2798,1,0,0,0,2803,2806,1,0,0,0,2804,
	2802,1,0,0,0,2804,2805,1,0,0,0,2805,381,1,0,0,0,2806,2804,1,0,0,0,2807,
	2814,3,384,192,0,2808,2809,5,219,0,0,2809,2810,5,109,0,0,2810,2811,5,219,
	0,0,2811,2813,3,384,192,0,2812,2808,1,0,0,0,2813,2816,1,0,0,0,2814,2812,
	1,0,0,0,2814,2815,1,0,0,0,2815,383,1,0,0,0,2816,2814,1,0,0,0,2817,2824,
	3,386,193,0,2818,2819,5,219,0,0,2819,2820,5,110,0,0,2820,2821,5,219,0,0,
	2821,2823,3,386,193,0,2822,2818,1,0,0,0,2823,2826,1,0,0,0,2824,2822,1,0,
	0,0,2824,2825,1,0,0,0,2825,385,1,0,0,0,2826,2824,1,0,0,0,2827,2829,5,111,
	0,0,2828,2830,5,219,0,0,2829,2828,1,0,0,0,2829,2830,1,0,0,0,2830,2832,1,
	0,0,0,2831,2827,1,0,0,0,2832,2835,1,0,0,0,2833,2831,1,0,0,0,2833,2834,1,
	0,0,0,2834,2836,1,0,0,0,2835,2833,1,0,0,0,2836,2837,3,388,194,0,2837,387,
	1,0,0,0,2838,2845,3,390,195,0,2839,2841,5,219,0,0,2840,2839,1,0,0,0,2840,
	2841,1,0,0,0,2841,2842,1,0,0,0,2842,2844,3,450,225,0,2843,2840,1,0,0,0,
	2844,2847,1,0,0,0,2845,2843,1,0,0,0,2845,2846,1,0,0,0,2846,389,1,0,0,0,
	2847,2845,1,0,0,0,2848,2867,3,392,196,0,2849,2851,5,219,0,0,2850,2849,1,
	0,0,0,2850,2851,1,0,0,0,2851,2852,1,0,0,0,2852,2854,5,13,0,0,2853,2855,
	5,219,0,0,2854,2853,1,0,0,0,2854,2855,1,0,0,0,2855,2856,1,0,0,0,2856,2866,
	3,392,196,0,2857,2859,5,219,0,0,2858,2857,1,0,0,0,2858,2859,1,0,0,0,2859,
	2860,1,0,0,0,2860,2862,5,3,0,0,2861,2863,5,219,0,0,2862,2861,1,0,0,0,2862,
	2863,1,0,0,0,2863,2864,1,0,0,0,2864,2866,3,392,196,0,2865,2850,1,0,0,0,
	2865,2858,1,0,0,0,2866,2869,1,0,0,0,2867,2865,1,0,0,0,2867,2868,1,0,0,0,
	2868,391,1,0,0,0,2869,2867,1,0,0,0,2870,2897,3,394,197,0,2871,2873,5,219,
	0,0,2872,2871,1,0,0,0,2872,2873,1,0,0,0,2873,2874,1,0,0,0,2874,2876,5,19,
	0,0,2875,2877,5,219,0,0,2876,2875,1,0,0,0,2876,2877,1,0,0,0,2877,2878,1,
	0,0,0,2878,2896,3,394,197,0,2879,2881,5,219,0,0,2880,2879,1,0,0,0,2880,
	2881,1,0,0,0,2881,2882,1,0,0,0,2882,2884,5,6,0,0,2883,2885,5,219,0,0,2884,
	2883,1,0,0,0,2884,2885,1,0,0,0,2885,2886,1,0,0,0,2886,2896,3,394,197,0,
	2887,2889,5,219,0,0,2888,2887,1,0,0,0,2888,2889,1,0,0,0,2889,2890,1,0,0,
	0,2890,2892,5,24,0,0,2891,2893,5,219,0,0,2892,2891,1,0,0,0,2892,2893,1,
	0,0,0,2893,2894,1,0,0,0,2894,2896,3,394,197,0,2895,2872,1,0,0,0,2895,2880,
	1,0,0,0,2895,2888,1,0,0,0,2896,2899,1,0,0,0,2897,2895,1,0,0,0,2897,2898,
	1,0,0,0,2898,393,1,0,0,0,2899,2897,1,0,0,0,2900,2911,3,396,198,0,2901,2903,
	5,219,0,0,2902,2901,1,0,0,0,2902,2903,1,0,0,0,2903,2904,1,0,0,0,2904,2906,
	5,27,0,0,2905,2907,5,219,0,0,2906,2905,1,0,0,0,2906,2907,1,0,0,0,2907,2908,
	1,0,0,0,2908,2910,3,396,198,0,2909,2902,1,0,0,0,2910,2913,1,0,0,0,2911,
	2909,1,0,0,0,2911,2912,1,0,0,0,2912,395,1,0,0,0,2913,2911,1,0,0,0,2914,
	2916,7,15,0,0,2915,2917,5,219,0,0,2916,2915,1,0,0,0,2916,2917,1,0,0,0,2917,
	2919,1,0,0,0,2918,2914,1,0,0,0,2919,2922,1,0,0,0,2920,2918,1,0,0,0,2920,
	2921,1,0,0,0,2921,2923,1,0,0,0,2922,2920,1,0,0,0,2923,2924,3,398,199,0,
	2924,397,1,0,0,0,2925,2979,3,400,200,0,2926,2928,5,219,0,0,2927,2926,1,
	0,0,0,2927,2928,1,0,0,0,2928,2929,1,0,0,0,2929,2930,5,17,0,0,2930,2931,
	3,372,186,0,2931,2932,5,18,0,0,2932,2978,1,0,0,0,2933,2935,5,219,0,0,2934,
	2933,1,0,0,0,2934,2935,1,0,0,0,2935,2936,1,0,0,0,2936,2938,5,17,0,0,2937,
	2939,3,372,186,0,2938,2937,1,0,0,0,2938,2939,1,0,0,0,2939,2940,1,0,0,0,
	2940,2942,5,26,0,0,2941,2943,3,372,186,0,2942,2941,1,0,0,0,2942,2943,1,
	0,0,0,2943,2944,1,0,0,0,2944,2978,5,18,0,0,2945,2947,5,219,0,0,2946,2945,
	1,0,0,0,2946,2947,1,0,0,0,2947,2948,1,0,0,0,2948,2962,5,28,0,0,2949,2950,
	5,219,0,0,2950,2962,5,88,0,0,2951,2952,5,219,0,0,2952,2953,5,112,0,0,2953,
	2954,5,219,0,0,2954,2962,5,74,0,0,2955,2956,5,219,0,0,2956,2957,5,113,0,
	0,2957,2958,5,219,0,0,2958,2962,5,74,0,0,2959,2960,5,219,0,0,2960,2962,
	5,114,0,0,2961,2946,1,0,0,0,2961,2949,1,0,0,0,2961,2951,1,0,0,0,2961,2955,
	1,0,0,0,2961,2959,1,0,0,0,2962,2964,1,0,0,0,2963,2965,5,219,0,0,2964,2963,
	1,0,0,0,2964,2965,1,0,0,0,2965,2966,1,0,0,0,2966,2978,3,400,200,0,2967,
	2968,5,219,0,0,2968,2969,5,69,0,0,2969,2970,5,219,0,0,2970,2978,5,115,0,
	0,2971,2972,5,219,0,0,2972,2973,5,69,0,0,2973,2974,5,219,0,0,2974,2975,
	5,111,0,0,2975,2976,5,219,0,0,2976,2978,5,115,0,0,2977,2927,1,0,0,0,2977,
	2934,1,0,0,0,2977,2961,1,0,0,0,2977,2967,1,0,0,0,2977,2971,1,0,0,0,2978,
	2981,1,0,0,0,2979,2977,1,0,0,0,2979,2980,1,0,0,0,2980,399,1,0,0,0,2981,
	2979,1,0,0,0,2982,2992,3,440,220,0,2983,2985,5,219,0,0,2984,2983,1,0,0,
	0,2984,2985,1,0,0,0,2985,2988,1,0,0,0,2986,2989,3,472,236,0,2987,2989,3,
	348,174,0,2988,2986,1,0,0,0,2988,2987,1,0,0,0,2989,2991,1,0,0,0,2990,2984,
	1,0,0,0,2991,2994,1,0,0,0,2992,2990,1,0,0,0,2992,2993,1,0,0,0,2993,401,
	1,0,0,0,2994,2992,1,0,0,0,2995,2997,3,404,202,0,2996,2998,5,219,0,0,2997,
	2996,1,0,0,0,2997,2998,1,0,0,0,2998,2999,1,0,0,0,2999,3001,5,20,0,0,3000,
	3002,5,219,0,0,3001,3000,1,0,0,0,3001,3002,1,0,0,0,3002,3003,1,0,0,0,3003,
	3005,3,456,228,0,3004,3006,5,219,0,0,3005,3004,1,0,0,0,3005,3006,1,0,0,
	0,3006,3007,1,0,0,0,3007,3008,5,21,0,0,3008,403,1,0,0,0,3009,3010,5,117,
	0,0,3010,405,1,0,0,0,3011,3013,3,408,204,0,3012,3014,5,219,0,0,3013,3012,
	1,0,0,0,3013,3014,1,0,0,0,3014,3015,1,0,0,0,3015,3017,5,20,0,0,3016,3018,
	5,219,0,0,3017,3016,1,0,0,0,3017,3018,1,0,0,0,3018,3019,1,0,0,0,3019,3021,
	3,372,186,0,3020,3022,5,219,0,0,3021,3020,1,0,0,0,3021,3022,1,0,0,0,3022,
	3023,1,0,0,0,3023,3024,5,21,0,0,3024,407,1,0,0,0,3025,3026,5,71,0,0,3026,
	409,1,0,0,0,3027,3029,3,412,206,0,3028,3030,5,219,0,0,3029,3028,1,0,0,0,
	3029,3030,1,0,0,0,3030,3031,1,0,0,0,3031,3033,5,20,0,0,3032,3034,5,219,
	0,0,3033,3032,1,0,0,0,3033,3034,1,0,0,0,3034,3035,1,0,0,0,3035,3037,3,456,
	228,0,3036,3038,5,219,0,0,3037,3036,1,0,0,0,3037,3038,1,0,0,0,3038,3039,
	1,0,0,0,3039,3040,5,21,0,0,3040,411,1,0,0,0,3041,3042,5,62,0,0,3042,413,
	1,0,0,0,3043,3045,3,416,208,0,3044,3046,5,219,0,0,3045,3044,1,0,0,0,3045,
	3046,1,0,0,0,3046,3047,1,0,0,0,3047,3049,5,20,0,0,3048,3050,5,219,0,0,3049,
	3048,1,0,0,0,3049,3050,1,0,0,0,3050,3051,1,0,0,0,3051,3053,3,456,228,0,
	3052,3054,5,219,0,0,3053,3052,1,0,0,0,3053,3054,1,0,0,0,3054,3055,1,0,0,
	0,3055,3056,5,21,0,0,3056,415,1,0,0,0,3057,3058,5,119,0,0,3058,417,1,0,
	0,0,3059,3061,3,420,210,0,3060,3062,5,219,0,0,3061,3060,1,0,0,0,3061,3062,
	1,0,0,0,3062,3063,1,0,0,0,3063,3065,5,20,0,0,3064,3066,5,219,0,0,3065,3064,
	1,0,0,0,3065,3066,1,0,0,0,3066,3067,1,0,0,0,3067,3069,3,456,228,0,3068,
	3070,5,219,0,0,3069,3068,1,0,0,0,3069,3070,1,0,0,0,3070,3071,1,0,0,0,3071,
	3072,5,21,0,0,3072,419,1,0,0,0,3073,3074,5,120,0,0,3074,421,1,0,0,0,3075,
	3077,3,424,212,0,3076,3078,5,219,0,0,3077,3076,1,0,0,0,3077,3078,1,0,0,
	0,3078,3079,1,0,0,0,3079,3081,5,20,0,0,3080,3082,5,219,0,0,3081,3080,1,
	0,0,0,3081,3082,1,0,0,0,3082,3083,1,0,0,0,3083,3085,3,456,228,0,3084,3086,
	5,219,0,0,3085,3084,1,0,0,0,3085,3086,1,0,0,0,3086,3087,1,0,0,0,3087,3088,
	5,21,0,0,3088,423,1,0,0,0,3089,3090,5,121,0,0,3090,425,1,0,0,0,3091,3093,
	3,428,214,0,3092,3094,5,219,0,0,3093,3092,1,0,0,0,3093,3094,1,0,0,0,3094,
	3095,1,0,0,0,3095,3097,5,20,0,0,3096,3098,5,219,0,0,3097,3096,1,0,0,0,3097,
	3098,1,0,0,0,3098,3099,1,0,0,0,3099,3108,3,456,228,0,3100,3102,5,219,0,
	0,3101,3100,1,0,0,0,3101,3102,1,0,0,0,3102,3103,1,0,0,0,3103,3105,5,23,
	0,0,3104,3106,5,219,0,0,3105,3104,1,0,0,0,3105,3106,1,0,0,0,3106,3107,1,
	0,0,0,3107,3109,3,372,186,0,3108,3101,1,0,0,0,3108,3109,1,0,0,0,3109,3111,
	1,0,0,0,3110,3112,5,219,0,0,3111,3110,1,0,0,0,3111,3112,1,0,0,0,3112,3113,
	1,0,0,0,3113,3114,5,21,0,0,3114,427,1,0,0,0,3115,3116,5,118,0,0,3116,429,
	1,0,0,0,3117,3119,3,432,216,0,3118,3120,5,219,0,0,3119,3118,1,0,0,0,3119,
	3120,1,0,0,0,3120,3121,1,0,0,0,3121,3123,5,20,0,0,3122,3124,5,219,0,0,3123,
	3122,1,0,0,0,3123,3124,1,0,0,0,3124,3125,1,0,0,0,3125,3127,3,478,239,0,
	3126,3128,5,219,0,0,3127,3126,1,0,0,0,3127,3128,1,0,0,0,3128,3129,1,0,0,
	0,3129,3131,5,12,0,0,3130,3132,5,219,0,0,3131,3130,1,0,0,0,3131,3132,1,
	0,0,0,3132,3133,1,0,0,0,3133,3135,3,372,186,0,3134,3136,5,219,0,0,3135,
	3134,1,0,0,0,3135,3136,1,0,0,0,3136,3137,1,0,0,0,3137,3139,5,15,0,0,3138,
	3140,5,219,0,0,3139,3138,1,0,0,0,3139,3140,1,0,0,0,3140,3141,1,0,0,0,3141,
	3143,3,458,229,0,3142,3144,5,219,0,0,3143,3142,1,0,0,0,3143,3144,1,0,0,
	0,3144,3145,1,0,0,0,3145,3147,5,23,0,0,3146,3148,5,219,0,0,3147,3146,1,
	0,0,0,3147,3148,1,0,0,0,3148,3149,1,0,0,0,3149,3151,3,372,186,0,3150,3152,
	5,219,0,0,3151,3150,1,0,0,0,3151,3152,1,0,0,0,3152,3153,1,0,0,0,3153,3154,
	5,21,0,0,3154,431,1,0,0,0,3155,3156,5,124,0,0,3156,433,1,0,0,0,3157,3159,
	3,436,218,0,3158,3160,5,219,0,0,3159,3158,1,0,0,0,3159,3160,1,0,0,0,3160,
	3161,1,0,0,0,3161,3163,5,20,0,0,3162,3164,5,219,0,0,3163,3162,1,0,0,0,3163,
	3164,1,0,0,0,3164,3165,1,0,0,0,3165,3167,3,308,154,0,3166,3168,5,219,0,
	0,3167,3166,1,0,0,0,3167,3168,1,0,0,0,3168,3169,1,0,0,0,3169,3170,5,21,
	0,0,3170,3186,1,0,0,0,3171,3173,3,438,219,0,3172,3174,5,219,0,0,3173,3172,
	1,0,0,0,3173,3174,1,0,0,0,3174,3175,1,0,0,0,3175,3177,5,20,0,0,3176,3178,
	5,219,0,0,3177,3176,1,0,0,0,3177,3178,1,0,0,0,3178,3179,1,0,0,0,3179,3181,
	3,308,154,0,3180,3182,5,219,0,0,3181,3180,1,0,0,0,3181,3182,1,0,0,0,3182,
	3183,1,0,0,0,3183,3184,5,21,0,0,3184,3186,1,0,0,0,3185,3157,1,0,0,0,3185,
	3171,1,0,0,0,3186,435,1,0,0,0,3187,3188,5,106,0,0,3188,437,1,0,0,0,3189,
	3190,5,107,0,0,3190,439,1,0,0,0,3191,3224,3,442,221,0,3192,3224,3,496,248,
	0,3193,3224,3,474,237,0,3194,3196,5,116,0,0,3195,3197,5,219,0,0,3196,3195,
	1,0,0,0,3196,3197,1,0,0,0,3197,3198,1,0,0,0,3198,3200,5,20,0,0,3199,3201,
	5,219,0,0,3200,3199,1,0,0,0,3200,3201,1,0,0,0,3201,3202,1,0,0,0,3202,3204,
	5,19,0,0,3203,3205,5,219,0,0,3204,3203,1,0,0,0,3204,3205,1,0,0,0,3205,3206,
	1,0,0,0,3206,3224,5,21,0,0,3207,3224,3,468,234,0,3208,3224,3,470,235,0,
	3209,3224,3,402,201,0,3210,3224,3,426,213,0,3211,3224,3,430,215,0,3212,
	3224,3,410,205,0,3213,3224,3,414,207,0,3214,3224,3,418,209,0,3215,3224,
	3,422,211,0,3216,3224,3,406,203,0,3217,3224,3,434,217,0,3218,3224,3,454,
	227,0,3219,3224,3,452,226,0,3220,3224,3,460,230,0,3221,3224,3,374,187,0,
	3222,3224,3,478,239,0,3223,3191,1,0,0,0,3223,3192,1,0,0,0,3223,3193,1,0,
	0,0,3223,3194,1,0,0,0,3223,3207,1,0,0,0,3223,3208,1,0,0,0,3223,3209,1,0,
	0,0,3223,3210,1,0,0,0,3223,3211,1,0,0,0,3223,3212,1,0,0,0,3223,3213,1,0,
	0,0,3223,3214,1,0,0,0,3223,3215,1,0,0,0,3223,3216,1,0,0,0,3223,3217,1,0,
	0,0,3223,3218,1,0,0,0,3223,3219,1,0,0,0,3223,3220,1,0,0,0,3223,3221,1,0,
	0,0,3223,3222,1,0,0,0,3224,441,1,0,0,0,3225,3233,3,480,240,0,3226,3233,
	3,444,222,0,3227,3233,3,446,223,0,3228,3233,5,115,0,0,3229,3233,3,482,241,
	0,3230,3233,3,448,224,0,3231,3233,3,484,242,0,3232,3225,1,0,0,0,3232,3226,
	1,0,0,0,3232,3227,1,0,0,0,3232,3228,1,0,0,0,3232,3229,1,0,0,0,3232,3230,
	1,0,0,0,3232,3231,1,0,0,0,3233,443,1,0,0,0,3234,3235,5,200,0,0,3235,445,
	1,0,0,0,3236,3237,7,16,0,0,3237,447,1,0,0,0,3238,3240,5,17,0,0,3239,3241,
	5,219,0,0,3240,3239,1,0,0,0,3240,3241,1,0,0,0,3241,3259,1,0,0,0,3242,3244,
	3,372,186,0,3243,3245,5,219,0,0,3244,3243,1,0,0,0,3244,3245,1,0,0,0,3245,
	3256,1,0,0,0,3246,3248,5,15,0,0,3247,3249,5,219,0,0,3248,3247,1,0,0,0,3248,
	3249,1,0,0,0,3249,3250,1,0,0,0,3250,3252,3,372,186,0,3251,3253,5,219,0,
	0,3252,3251,1,0,0,0,3252,3253,1,0,0,0,3253,3255,1,0,0,0,3254,3246,1,0,0,
	0,3255,3258,1,0,0,0,3256,3254,1,0,0,0,3256,3257,1,0,0,0,3257,3260,1,0,0,
	0,3258,3256,1,0,0,0,3259,3242,1,0,0,0,3259,3260,1,0,0,0,3260,3261,1,0,0,
	0,3261,3262,5,18,0,0,3262,449,1,0,0,0,3263,3265,5,12,0,0,3264,3266,5,219,
	0,0,3265,3264,1,0,0,0,3265,3266,1,0,0,0,3266,3267,1,0,0,0,3267,3299,3,390,
	195,0,3268,3270,5,29,0,0,3269,3271,5,219,0,0,3270,3269,1,0,0,0,3270,3271,
	1,0,0,0,3271,3272,1,0,0,0,3272,3299,3,390,195,0,3273,3275,5,30,0,0,3274,
	3276,5,219,0,0,3275,3274,1,0,0,0,3275,3276,1,0,0,0,3276,3277,1,0,0,0,3277,
	3299,3,390,195,0,3278,3280,5,31,0,0,3279,3281,5,219,0,0,3280,3279,1,0,0,
	0,3280,3281,1,0,0,0,3281,3282,1,0,0,0,3282,3299,3,390,195,0,3283,3285,5,
	32,0,0,3284,3286,5,219,0,0,3285,3284,1,0,0,0,3285,3286,1,0,0,0,3286,3287,
	1,0,0,0,3287,3299,3,390,195,0,3288,3290,5,33,0,0,3289,3291,5,219,0,0,3290,
	3289,1,0,0,0,3290,3291,1,0,0,0,3291,3292,1,0,0,0,3292,3299,3,390,195,0,
	3293,3295,5,34,0,0,3294,3296,5,219,0,0,3295,3294,1,0,0,0,3295,3296,1,0,
	0,0,3296,3297,1,0,0,0,3297,3299,3,390,195,0,3298,3263,1,0,0,0,3298,3268,
	1,0,0,0,3298,3273,1,0,0,0,3298,3278,1,0,0,0,3298,3283,1,0,0,0,3298,3288,
	1,0,0,0,3298,3293,1,0,0,0,3299,451,1,0,0,0,3300,3302,5,20,0,0,3301,3303,
	5,219,0,0,3302,3301,1,0,0,0,3302,3303,1,0,0,0,3303,3304,1,0,0,0,3304,3306,
	3,372,186,0,3305,3307,5,219,0,0,3306,3305,1,0,0,0,3306,3307,1,0,0,0,3307,
	3308,1,0,0,0,3308,3309,5,21,0,0,3309,453,1,0,0,0,3310,3315,3,310,155,0,
	3311,3313,5,219,0,0,3312,3311,1,0,0,0,3312,3313,1,0,0,0,3313,3314,1,0,0,
	0,3314,3316,3,312,156,0,3315,3312,1,0,0,0,3316,3317,1,0,0,0,3317,3315,1,
	0,0,0,3317,3318,1,0,0,0,3318,455,1,0,0,0,3319,3324,3,458,229,0,3320,3322,
	5,219,0,0,3321,3320,1,0,0,0,3321,3322,1,0,0,0,3322,3323,1,0,0,0,3323,3325,
	3,300,150,0,3324,3321,1,0,0,0,3324,3325,1,0,0,0,3325,457,1,0,0,0,3326,3327,
	3,478,239,0,3327,3328,5,219,0,0,3328,3329,5,88,0,0,3329,3330,5,219,0,0,
	3330,3331,3,372,186,0,3331,459,1,0,0,0,3332,3334,3,462,231,0,3333,3335,
	5,219,0,0,3334,3333,1,0,0,0,3334,3335,1,0,0,0,3335,3336,1,0,0,0,3336,3338,
	5,20,0,0,3337,3339,5,219,0,0,3338,3337,1,0,0,0,3338,3339,1,0,0,0,3339,3344,
	1,0,0,0,3340,3342,5,89,0,0,3341,3343,5,219,0,0,3342,3341,1,0,0,0,3342,3343,
	1,0,0,0,3343,3345,1,0,0,0,3344,3340,1,0,0,0,3344,3345,1,0,0,0,3345,3363,
	1,0,0,0,3346,3348,3,372,186,0,3347,3349,5,219,0,0,3348,3347,1,0,0,0,3348,
	3349,1,0,0,0,3349,3360,1,0,0,0,3350,3352,5,15,0,0,3351,3353,5,219,0,0,3352,
	3351,1,0,0,0,3352,3353,1,0,0,0,3353,3354,1,0,0,0,3354,3356,3,372,186,0,
	3355,3357,5,219,0,0,3356,3355,1,0,0,0,3356,3357,1,0,0,0,3357,3359,1,0,0,
	0,3358,3350,1,0,0,0,3359,3362,1,0,0,0,3360,3358,1,0,0,0,3360,3361,1,0,0,
	0,3361,3364,1,0,0,0,3362,3360,1,0,0,0,3363,3346,1,0,0,0,3363,3364,1,0,0,
	0,3364,3365,1,0,0,0,3365,3366,5,21,0,0,3366,461,1,0,0,0,3367,3368,3,516,
	258,0,3368,3369,3,464,232,0,3369,463,1,0,0,0,3370,3371,3,524,262,0,3371,
	465,1,0,0,0,3372,3373,3,524,262,0,3373,467,1,0,0,0,3374,3376,5,17,0,0,3375,
	3377,5,219,0,0,3376,3375,1,0,0,0,3376,3377,1,0,0,0,3377,3378,1,0,0,0,3378,
	3387,3,456,228,0,3379,3381,5,219,0,0,3380,3379,1,0,0,0,3380,3381,1,0,0,
	0,3381,3382,1,0,0,0,3382,3384,5,23,0,0,3383,3385,5,219,0,0,3384,3383,1,
	0,0,0,3384,3385,1,0,0,0,3385,3386,1,0,0,0,3386,3388,3,372,186,0,3387,3380,
	1,0,0,0,3387,3388,1,0,0,0,3388,3390,1,0,0,0,3389,3391,5,219,0,0,3390,3389,
	1,0,0,0,3390,3391,1,0,0,0,3391,3392,1,0,0,0,3392,3393,5,18,0,0,3393,469,
	1,0,0,0,3394,3396,5,17,0,0,3395,3397,5,219,0,0,3396,3395,1,0,0,0,3396,3397,
	1,0,0,0,3397,3406,1,0,0,0,3398,3400,3,478,239,0,3399,3401,5,219,0,0,3400,
	3399,1,0,0,0,3400,3401,1,0,0,0,3401,3402,1,0,0,0,3402,3404,5,12,0,0,3403,
	3405,5,219,0,0,3404,3403,1,0,0,0,3404,3405,1,0,0,0,3405,3407,1,0,0,0,3406,
	3398,1,0,0,0,3406,3407,1,0,0,0,3407,3408,1,0,0,0,3408,3410,3,454,227,0,
	3409,3411,5,219,0,0,3410,3409,1,0,0,0,3410,3411,1,0,0,0,3411,3420,1,0,0,
	0,3412,3414,5,105,0,0,3413,3415,5,219,0,0,3414,3413,1,0,0,0,3414,3415,1,
	0,0,0,3415,3416,1,0,0,0,3416,3418,3,372,186,0,3417,3419,5,219,0,0,3418,
	3417,1,0,0,0,3418,3419,1,0,0,0,3419,3421,1,0,0,0,3420,3412,1,0,0,0,3420,
	3421,1,0,0,0,3421,3422,1,0,0,0,3422,3424,5,23,0,0,3423,3425,5,219,0,0,3424,
	3423,1,0,0,0,3424,3425,1,0,0,0,3425,3426,1,0,0,0,3426,3428,3,372,186,0,
	3427,3429,5,219,0,0,3428,3427,1,0,0,0,3428,3429,1,0,0,0,3429,3430,1,0,0,
	0,3430,3431,5,18,0,0,3431,471,1,0,0,0,3432,3434,5,7,0,0,3433,3435,5,219,
	0,0,3434,3433,1,0,0,0,3434,3435,1,0,0,0,3435,3436,1,0,0,0,3436,3437,3,510,
	255,0,3437,473,1,0,0,0,3438,3443,5,125,0,0,3439,3441,5,219,0,0,3440,3439,
	1,0,0,0,3440,3441,1,0,0,0,3441,3442,1,0,0,0,3442,3444,3,476,238,0,3443,
	3440,1,0,0,0,3444,3445,1,0,0,0,3445,3443,1,0,0,0,3445,3446,1,0,0,0,3446,
	3461,1,0,0,0,3447,3449,5,125,0,0,3448,3450,5,219,0,0,3449,3448,1,0,0,0,
	3449,3450,1,0,0,0,3450,3451,1,0,0,0,3451,3456,3,372,186,0,3452,3454,5,219,
	0,0,3453,3452,1,0,0,0,3453,3454,1,0,0,0,3454,3455,1,0,0,0,3455,3457,3,476,
	238,0,3456,3453,1,0,0,0,3457,3458,1,0,0,0,3458,3456,1,0,0,0,3458,3459,1,
	0,0,0,3459,3461,1,0,0,0,3460,3438,1,0,0,0,3460,3447,1,0,0,0,3461,3470,1,
	0,0,0,3462,3464,5,219,0,0,3463,3462,1,0,0,0,3463,3464,1,0,0,0,3464,3465,
	1,0,0,0,3465,3467,5,126,0,0,3466,3468,5,219,0,0,3467,3466,1,0,0,0,3467,
	3468,1,0,0,0,3468,3469,1,0,0,0,3469,3471,3,372,186,0,3470,3463,1,0,0,0,
	3470,3471,1,0,0,0,3471,3473,1,0,0,0,3472,3474,5,219,0,0,3473,3472,1,0,0,
	0,3473,3474,1,0,0,0,3474,3475,1,0,0,0,3475,3476,5,127,0,0,3476,475,1,0,
	0,0,3477,3479,5,128,0,0,3478,3480,5,219,0,0,3479,3478,1,0,0,0,3479,3480,
	1,0,0,0,3480,3481,1,0,0,0,3481,3483,3,372,186,0,3482,3484,5,219,0,0,3483,
	3482,1,0,0,0,3483,3484,1,0,0,0,3484,3485,1,0,0,0,3485,3487,5,129,0,0,3486,
	3488,5,219,0,0,3487,3486,1,0,0,0,3487,3488,1,0,0,0,3488,3489,1,0,0,0,3489,
	3490,3,372,186,0,3490,477,1,0,0,0,3491,3492,3,524,262,0,3492,479,1,0,0,
	0,3493,3496,3,514,257,0,3494,3496,3,512,256,0,3495,3493,1,0,0,0,3495,3494,
	1,0,0,0,3496,481,1,0,0,0,3497,3499,5,14,0,0,3498,3500,5,219,0,0,3499,3498,
	1,0,0,0,3499,3500,1,0,0,0,3500,3518,1,0,0,0,3501,3503,3,488,244,0,3502,
	3504,5,219,0,0,3503,3502,1,0,0,0,3503,3504,1,0,0,0,3504,3515,1,0,0,0,3505,
	3507,5,15,0,0,3506,3508,5,219,0,0,3507,3506,1,0,0,0,3507,3508,1,0,0,0,3508,
	3509,1,0,0,0,3509,3511,3,488,244,0,3510,3512,5,219,0,0,3511,3510,1,0,0,
	0,3511,3512,1,0,0,0,3512,3514,1,0,0,0,3513,3505,1,0,0,0,3514,3517,1,0,0,
	0,3515,3513,1,0,0,0,3515,3516,1,0,0,0,3516,3519,1,0,0,0,3517,3515,1,0,0,
	0,3518,3501,1,0,0,0,3518,3519,1,0,0,0,3519,3520,1,0,0,0,3520,3521,5,16,
	0,0,3521,483,1,0,0,0,3522,3524,3,478,239,0,3523,3525,5,219,0,0,3524,3523,
	1,0,0,0,3524,3525,1,0,0,0,3525,3526,1,0,0,0,3526,3528,5,14,0,0,3527,3529,
	5,219,0,0,3528,3527,1,0,0,0,3528,3529,1,0,0,0,3529,3531,1,0,0,0,3530,3532,
	3,486,243,0,3531,3530,1,0,0,0,3531,3532,1,0,0,0,3532,3543,1,0,0,0,3533,
	3535,5,219,0,0,3534,3533,1,0,0,0,3534,3535,1,0,0,0,3535,3536,1,0,0,0,3536,
	3538,5,15,0,0,3537,3539,5,219,0,0,3538,3537,1,0,0,0,3538,3539,1,0,0,0,3539,
	3540,1,0,0,0,3540,3542,3,486,243,0,3541,3534,1,0,0,0,3542,3545,1,0,0,0,
	3543,3541,1,0,0,0,3543,3544,1,0,0,0,3544,3547,1,0,0,0,3545,3543,1,0,0,0,
	3546,3548,5,219,0,0,3547,3546,1,0,0,0,3547,3548,1,0,0,0,3548,3549,1,0,0,
	0,3549,3550,5,16,0,0,3550,485,1,0,0,0,3551,3556,3,488,244,0,3552,3556,3,
	490,245,0,3553,3556,3,492,246,0,3554,3556,3,494,247,0,3555,3551,1,0,0,0,
	3555,3552,1,0,0,0,3555,3553,1,0,0,0,3555,3554,1,0,0,0,3556,487,1,0,0,0,
	3557,3559,3,510,255,0,3558,3560,5,219,0,0,3559,3558,1,0,0,0,3559,3560,1,
	0,0,0,3560,3561,1,0,0,0,3561,3563,5,2,0,0,3562,3564,5,219,0,0,3563,3562,
	1,0,0,0,3563,3564,1,0,0,0,3564,3565,1,0,0,0,3565,3566,3,372,186,0,3566,
	489,1,0,0,0,3567,3568,5,7,0,0,3568,3569,3,478,239,0,3569,491,1,0,0,0,3570,
	3571,3,478,239,0,3571,493,1,0,0,0,3572,3573,5,7,0,0,3573,3574,5,19,0,0,
	3574,495,1,0,0,0,3575,3578,3,498,249,0,3576,3578,3,500,250,0,3577,3575,
	1,0,0,0,3577,3576,1,0,0,0,3578,497,1,0,0,0,3579,3581,5,14,0,0,3580,3582,
	5,219,0,0,3581,3580,1,0,0,0,3581,3582,1,0,0,0,3582,3583,1,0,0,0,3583,3585,
	3,502,251,0,3584,3586,5,219,0,0,3585,3584,1,0,0,0,3585,3586,1,0,0,0,3586,
	3587,1,0,0,0,3587,3588,5,16,0,0,3588,499,1,0,0,0,3589,3590,5,35,0,0,3590,
	3591,3,502,251,0,3591,501,1,0,0,0,3592,3595,3,524,262,0,3593,3595,5,204,
	0,0,3594,3592,1,0,0,0,3594,3593,1,0,0,0,3595,503,1,0,0,0,3596,3607,3,506,
	253,0,3597,3599,5,219,0,0,3598,3597,1,0,0,0,3598,3599,1,0,0,0,3599,3600,
	1,0,0,0,3600,3602,5,15,0,0,3601,3603,5,219,0,0,3602,3601,1,0,0,0,3602,3603,
	1,0,0,0,3603,3604,1,0,0,0,3604,3606,3,506,253,0,3605,3598,1,0,0,0,3606,
	3609,1,0,0,0,3607,3605,1,0,0,0,3607,3608,1,0,0,0,3608,505,1,0,0,0,3609,
	3607,1,0,0,0,3610,3615,3,440,220,0,3611,3613,5,219,0,0,3612,3611,1,0,0,
	0,3612,3613,1,0,0,0,3613,3614,1,0,0,0,3614,3616,3,472,236,0,3615,3612,1,
	0,0,0,3616,3617,1,0,0,0,3617,3615,1,0,0,0,3617,3618,1,0,0,0,3618,507,1,
	0,0,0,3619,3630,3,510,255,0,3620,3622,5,219,0,0,3621,3620,1,0,0,0,3621,
	3622,1,0,0,0,3622,3623,1,0,0,0,3623,3625,5,15,0,0,3624,3626,5,219,0,0,3625,
	3624,1,0,0,0,3625,3626,1,0,0,0,3626,3627,1,0,0,0,3627,3629,3,510,255,0,
	3628,3621,1,0,0,0,3629,3632,1,0,0,0,3630,3628,1,0,0,0,3630,3631,1,0,0,0,
	3631,509,1,0,0,0,3632,3630,1,0,0,0,3633,3634,3,524,262,0,3634,511,1,0,0,
	0,3635,3636,7,17,0,0,3636,513,1,0,0,0,3637,3638,7,18,0,0,3638,515,1,0,0,
	0,3639,3640,3,524,262,0,3640,3641,5,7,0,0,3641,3643,1,0,0,0,3642,3639,1,
	0,0,0,3643,3646,1,0,0,0,3644,3642,1,0,0,0,3644,3645,1,0,0,0,3645,517,1,
	0,0,0,3646,3644,1,0,0,0,3647,3648,7,19,0,0,3648,519,1,0,0,0,3649,3650,7,
	20,0,0,3650,521,1,0,0,0,3651,3652,7,21,0,0,3652,523,1,0,0,0,3653,3658,5,
	215,0,0,3654,3658,5,218,0,0,3655,3658,3,526,263,0,3656,3658,5,206,0,0,3657,
	3653,1,0,0,0,3657,3654,1,0,0,0,3657,3655,1,0,0,0,3657,3656,1,0,0,0,3658,
	525,1,0,0,0,3659,3660,7,22,0,0,3660,527,1,0,0,0,533,533,537,542,546,549,
	554,562,570,583,587,591,600,605,609,612,615,620,624,631,649,672,680,682,
	686,691,697,703,707,711,715,719,726,729,733,737,743,747,751,755,759,766,
	769,777,786,791,795,798,805,813,817,823,828,834,845,849,857,860,864,868,
	873,878,884,889,899,903,908,915,920,923,940,952,957,964,973,979,985,992,
	998,1005,1007,1016,1020,1027,1034,1036,1055,1069,1074,1081,1090,1092,1101,
	1117,1123,1134,1144,1150,1160,1170,1173,1220,1267,1282,1290,1310,1319,1323,
	1328,1331,1340,1344,1349,1352,1356,1360,1365,1373,1378,1385,1391,1420,1429,
	1438,1444,1450,1453,1455,1475,1482,1489,1496,1498,1503,1507,1512,1515,1519,
	1523,1531,1537,1546,1553,1558,1567,1601,1605,1612,1618,1674,1678,1682,1686,
	1694,1698,1703,1707,1721,1725,1730,1734,1740,1744,1758,1765,1771,1781,1785,
	1791,1799,1810,1816,1828,1834,1846,1850,1860,1873,1877,1881,1887,1891,1894,
	1898,1908,1915,1928,1932,1940,1946,1950,1954,1959,1964,1968,1974,1978,1984,
	1988,1994,1998,2002,2006,2010,2014,2019,2026,2030,2035,2042,2046,2050,2058,
	2065,2068,2074,2077,2082,2085,2089,2092,2095,2102,2106,2110,2114,2117,2121,
	2125,2130,2135,2139,2144,2148,2152,2164,2167,2171,2177,2180,2183,2189,2192,
	2199,2202,2205,2209,2214,2218,2226,2230,2235,2240,2244,2262,2266,2271,2284,
	2288,2290,2293,2302,2306,2310,2322,2326,2331,2341,2347,2351,2356,2360,2364,
	2368,2374,2378,2383,2389,2398,2407,2415,2421,2425,2430,2439,2443,2448,2453,
	2457,2462,2466,2470,2475,2482,2486,2490,2492,2496,2498,2502,2504,2510,2516,
	2519,2522,2528,2533,2537,2542,2546,2550,2552,2556,2558,2561,2565,2567,2573,
	2577,2583,2589,2595,2599,2604,2609,2613,2618,2624,2628,2634,2638,2644,2650,
	2659,2665,2670,2678,2684,2690,2694,2699,2704,2708,2713,2719,2723,2729,2733,
	2739,2743,2745,2749,2753,2755,2757,2767,2773,2777,2783,2787,2790,2793,2804,
	2814,2824,2829,2833,2840,2845,2850,2854,2858,2862,2865,2867,2872,2876,2880,
	2884,2888,2892,2895,2897,2902,2906,2911,2916,2920,2927,2934,2938,2942,2946,
	2961,2964,2977,2979,2984,2988,2992,2997,3001,3005,3013,3017,3021,3029,3033,
	3037,3045,3049,3053,3061,3065,3069,3077,3081,3085,3093,3097,3101,3105,3108,
	3111,3119,3123,3127,3131,3135,3139,3143,3147,3151,3159,3163,3167,3173,3177,
	3181,3185,3196,3200,3204,3223,3232,3240,3244,3248,3252,3256,3259,3265,3270,
	3275,3280,3285,3290,3295,3298,3302,3306,3312,3317,3321,3324,3334,3338,3342,
	3344,3348,3352,3356,3360,3363,3376,3380,3384,3387,3390,3396,3400,3404,3406,
	3410,3414,3418,3420,3424,3428,3434,3440,3445,3449,3453,3458,3460,3463,3467,
	3470,3473,3479,3483,3487,3495,3499,3503,3507,3511,3515,3518,3524,3528,3531,
	3534,3538,3543,3547,3555,3559,3563,3577,3581,3585,3594,3598,3602,3607,3612,
	3617,3621,3625,3630,3644,3657];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CypherParser.__ATN) {
			CypherParser.__ATN = new ATNDeserializer().deserialize(CypherParser._serializedATN);
		}

		return CypherParser.__ATN;
	}


	static DecisionsToDFA = CypherParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CypherContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherPart_list(): CypherPartContext[] {
		return this.getTypedRuleContexts(CypherPartContext) as CypherPartContext[];
	}
	public cypherPart(i: number): CypherPartContext {
		return this.getTypedRuleContext(CypherPartContext, i) as CypherPartContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(CypherParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypher;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypher) {
	 		listener.enterCypher(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypher) {
	 		listener.exitCypher(this);
		}
	}
}


export class CypherPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherQuery(): CypherQueryContext {
		return this.getTypedRuleContext(CypherQueryContext, 0) as CypherQueryContext;
	}
	public cypherConsoleCommand(): CypherConsoleCommandContext {
		return this.getTypedRuleContext(CypherConsoleCommandContext, 0) as CypherConsoleCommandContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherPart) {
	 		listener.enterCypherPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherPart) {
	 		listener.exitCypherPart(this);
		}
	}
}


export class CypherConsoleCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherConsoleCommandName(): CypherConsoleCommandNameContext {
		return this.getTypedRuleContext(CypherConsoleCommandNameContext, 0) as CypherConsoleCommandNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public cypherConsoleCommandParameters(): CypherConsoleCommandParametersContext {
		return this.getTypedRuleContext(CypherConsoleCommandParametersContext, 0) as CypherConsoleCommandParametersContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommand) {
	 		listener.enterCypherConsoleCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommand) {
	 		listener.exitCypherConsoleCommand(this);
		}
	}
}


export class CypherConsoleCommandNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommandName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommandName) {
	 		listener.enterCypherConsoleCommandName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommandName) {
	 		listener.exitCypherConsoleCommandName(this);
		}
	}
}


export class CypherConsoleCommandParametersContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherConsoleCommandParameter_list(): CypherConsoleCommandParameterContext[] {
		return this.getTypedRuleContexts(CypherConsoleCommandParameterContext) as CypherConsoleCommandParameterContext[];
	}
	public cypherConsoleCommandParameter(i: number): CypherConsoleCommandParameterContext {
		return this.getTypedRuleContext(CypherConsoleCommandParameterContext, i) as CypherConsoleCommandParameterContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommandParameters;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommandParameters) {
	 		listener.enterCypherConsoleCommandParameters(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommandParameters) {
	 		listener.exitCypherConsoleCommandParameters(this);
		}
	}
}


export class CypherConsoleCommandParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public json(): JsonContext {
		return this.getTypedRuleContext(JsonContext, 0) as JsonContext;
	}
	public arrowExpression(): ArrowExpressionContext {
		return this.getTypedRuleContext(ArrowExpressionContext, 0) as ArrowExpressionContext;
	}
	public mapLiteral(): MapLiteralContext {
		return this.getTypedRuleContext(MapLiteralContext, 0) as MapLiteralContext;
	}
	public keyValueLiteral(): KeyValueLiteralContext {
		return this.getTypedRuleContext(KeyValueLiteralContext, 0) as KeyValueLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public subCommand(): SubCommandContext {
		return this.getTypedRuleContext(SubCommandContext, 0) as SubCommandContext;
	}
	public commandPath(): CommandPathContext {
		return this.getTypedRuleContext(CommandPathContext, 0) as CommandPathContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommandParameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommandParameter) {
	 		listener.enterCypherConsoleCommandParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommandParameter) {
	 		listener.exitCypherConsoleCommandParameter(this);
		}
	}
}


export class ArrowExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_arrowExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterArrowExpression) {
	 		listener.enterArrowExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitArrowExpression) {
	 		listener.exitArrowExpression(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uri(): UriContext {
		return this.getTypedRuleContext(UriContext, 0) as UriContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_url;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUrl) {
	 		listener.enterUrl(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUrl) {
	 		listener.exitUrl(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scheme(): SchemeContext {
		return this.getTypedRuleContext(SchemeContext, 0) as SchemeContext;
	}
	public host(): HostContext {
		return this.getTypedRuleContext(HostContext, 0) as HostContext;
	}
	public login(): LoginContext {
		return this.getTypedRuleContext(LoginContext, 0) as LoginContext;
	}
	public port(): PortContext {
		return this.getTypedRuleContext(PortContext, 0) as PortContext;
	}
	public path(): PathContext {
		return this.getTypedRuleContext(PathContext, 0) as PathContext;
	}
	public urlQuery(): UrlQueryContext {
		return this.getTypedRuleContext(UrlQueryContext, 0) as UrlQueryContext;
	}
	public frag(): FragContext {
		return this.getTypedRuleContext(FragContext, 0) as FragContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_uri;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUri) {
	 		listener.enterUri(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUri) {
	 		listener.exitUri(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_scheme;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterScheme) {
	 		listener.enterScheme(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitScheme) {
	 		listener.exitScheme(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public hostname(): HostnameContext {
		return this.getTypedRuleContext(HostnameContext, 0) as HostnameContext;
	}
	public hostnumber(): HostnumberContext {
		return this.getTypedRuleContext(HostnumberContext, 0) as HostnumberContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_host;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHost) {
	 		listener.enterHost(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHost) {
	 		listener.exitHost(this);
		}
	}
}


export class HostnameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_hostname;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHostname) {
	 		listener.enterHostname(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHostname) {
	 		listener.exitHostname(this);
		}
	}
}


export class HostnumberContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public urlDigits_list(): UrlDigitsContext[] {
		return this.getTypedRuleContexts(UrlDigitsContext) as UrlDigitsContext[];
	}
	public urlDigits(i: number): UrlDigitsContext {
		return this.getTypedRuleContext(UrlDigitsContext, i) as UrlDigitsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_hostnumber;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHostnumber) {
	 		listener.enterHostnumber(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHostnumber) {
	 		listener.exitHostnumber(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public urlDigits(): UrlDigitsContext {
		return this.getTypedRuleContext(UrlDigitsContext, 0) as UrlDigitsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_port;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPort) {
	 		listener.enterPort(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPort) {
	 		listener.exitPort(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_path;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPath) {
	 		listener.enterPath(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPath) {
	 		listener.exitPath(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_user;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUser) {
	 		listener.enterUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUser) {
	 		listener.exitUser(this);
		}
	}
}


export class LoginContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public password(): PasswordContext {
		return this.getTypedRuleContext(PasswordContext, 0) as PasswordContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_login;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLogin) {
	 		listener.enterLogin(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLogin) {
	 		listener.exitLogin(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_password;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPassword) {
	 		listener.enterPassword(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPassword) {
	 		listener.exitPassword(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_frag;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFrag) {
	 		listener.enterFrag(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFrag) {
	 		listener.exitFrag(this);
		}
	}
}


export class UrlQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public search(): SearchContext {
		return this.getTypedRuleContext(SearchContext, 0) as SearchContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_urlQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUrlQuery) {
	 		listener.enterUrlQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUrlQuery) {
	 		listener.exitUrlQuery(this);
		}
	}
}


export class SearchContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public searchparameter_list(): SearchparameterContext[] {
		return this.getTypedRuleContexts(SearchparameterContext) as SearchparameterContext[];
	}
	public searchparameter(i: number): SearchparameterContext {
		return this.getTypedRuleContext(SearchparameterContext, i) as SearchparameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_search;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSearch) {
	 		listener.enterSearch(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSearch) {
	 		listener.exitSearch(this);
		}
	}
}


export class SearchparameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public urlDigits(): UrlDigitsContext {
		return this.getTypedRuleContext(UrlDigitsContext, 0) as UrlDigitsContext;
	}
	public UrlHex(): TerminalNode {
		return this.getToken(CypherParser.UrlHex, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_searchparameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSearchparameter) {
	 		listener.enterSearchparameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSearchparameter) {
	 		listener.exitSearchparameter(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_string;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
}


export class UrlDigitsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerLiteral_list(): IntegerLiteralContext[] {
		return this.getTypedRuleContexts(IntegerLiteralContext) as IntegerLiteralContext[];
	}
	public integerLiteral(i: number): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, i) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_urlDigits;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUrlDigits) {
	 		listener.enterUrlDigits(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUrlDigits) {
	 		listener.exitUrlDigits(this);
		}
	}
}


export class JsonContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_json;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterJson) {
	 		listener.enterJson(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitJson) {
	 		listener.exitJson(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pair_list(): PairContext[] {
		return this.getTypedRuleContexts(PairContext) as PairContext[];
	}
	public pair(i: number): PairContext {
		return this.getTypedRuleContext(PairContext, i) as PairContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_obj;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterObj) {
	 		listener.enterObj(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitObj) {
	 		listener.exitObj(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_pair;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPair) {
	 		listener.enterPair(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPair) {
	 		listener.exitPair(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_array;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterArray) {
	 		listener.enterArray(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitArray) {
	 		listener.exitArray(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public obj(): ObjContext {
		return this.getTypedRuleContext(ObjContext, 0) as ObjContext;
	}
	public array(): ArrayContext {
		return this.getTypedRuleContext(ArrayContext, 0) as ArrayContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_value;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class KeyValueLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_keyValueLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterKeyValueLiteral) {
	 		listener.enterKeyValueLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitKeyValueLiteral) {
	 		listener.exitKeyValueLiteral(this);
		}
	}
}


export class CommandPathContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public numberLiteral_list(): NumberLiteralContext[] {
		return this.getTypedRuleContexts(NumberLiteralContext) as NumberLiteralContext[];
	}
	public numberLiteral(i: number): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, i) as NumberLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_commandPath;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCommandPath) {
	 		listener.enterCommandPath(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCommandPath) {
	 		listener.exitCommandPath(this);
		}
	}
}


export class SubCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_subCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSubCommand) {
	 		listener.enterSubCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSubCommand) {
	 		listener.exitSubCommand(this);
		}
	}
}


export class CypherQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryOptions(): QueryOptionsContext {
		return this.getTypedRuleContext(QueryOptionsContext, 0) as QueryOptionsContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherQuery) {
	 		listener.enterCypherQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherQuery) {
	 		listener.exitCypherQuery(this);
		}
	}
}


export class QueryOptionsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public anyCypherOption_list(): AnyCypherOptionContext[] {
		return this.getTypedRuleContexts(AnyCypherOptionContext) as AnyCypherOptionContext[];
	}
	public anyCypherOption(i: number): AnyCypherOptionContext {
		return this.getTypedRuleContext(AnyCypherOptionContext, i) as AnyCypherOptionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_queryOptions;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterQueryOptions) {
	 		listener.enterQueryOptions(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitQueryOptions) {
	 		listener.exitQueryOptions(this);
		}
	}
}


export class AnyCypherOptionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherOption(): CypherOptionContext {
		return this.getTypedRuleContext(CypherOptionContext, 0) as CypherOptionContext;
	}
	public explain(): ExplainContext {
		return this.getTypedRuleContext(ExplainContext, 0) as ExplainContext;
	}
	public profile(): ProfileContext {
		return this.getTypedRuleContext(ProfileContext, 0) as ProfileContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anyCypherOption;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnyCypherOption) {
	 		listener.enterAnyCypherOption(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnyCypherOption) {
	 		listener.exitAnyCypherOption(this);
		}
	}
}


export class CypherOptionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CYPHER(): TerminalNode {
		return this.getToken(CypherParser.CYPHER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public versionNumber(): VersionNumberContext {
		return this.getTypedRuleContext(VersionNumberContext, 0) as VersionNumberContext;
	}
	public configurationOption_list(): ConfigurationOptionContext[] {
		return this.getTypedRuleContexts(ConfigurationOptionContext) as ConfigurationOptionContext[];
	}
	public configurationOption(i: number): ConfigurationOptionContext {
		return this.getTypedRuleContext(ConfigurationOptionContext, i) as ConfigurationOptionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherOption;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherOption) {
	 		listener.enterCypherOption(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherOption) {
	 		listener.exitCypherOption(this);
		}
	}
}


export class VersionNumberContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RegularDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.RegularDecimalReal, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_versionNumber;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterVersionNumber) {
	 		listener.enterVersionNumber(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitVersionNumber) {
	 		listener.exitVersionNumber(this);
		}
	}
}


export class ExplainContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(CypherParser.EXPLAIN, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_explain;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExplain) {
	 		listener.enterExplain(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExplain) {
	 		listener.exitExplain(this);
		}
	}
}


export class ProfileContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROFILE(): TerminalNode {
		return this.getToken(CypherParser.PROFILE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_profile;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProfile) {
	 		listener.enterProfile(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProfile) {
	 		listener.exitProfile(this);
		}
	}
}


export class ConfigurationOptionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_configurationOption;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterConfigurationOption) {
	 		listener.enterConfigurationOption(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitConfigurationOption) {
	 		listener.exitConfigurationOption(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public command(): CommandContext {
		return this.getTypedRuleContext(CommandContext, 0) as CommandContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public systemCommand(): SystemCommandContext {
		return this.getTypedRuleContext(SystemCommandContext, 0) as SystemCommandContext;
	}
	public CATALOG(): TerminalNode {
		return this.getToken(CypherParser.CATALOG, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_statement;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public regularQuery(): RegularQueryContext {
		return this.getTypedRuleContext(RegularQueryContext, 0) as RegularQueryContext;
	}
	public bulkImportQuery(): BulkImportQueryContext {
		return this.getTypedRuleContext(BulkImportQueryContext, 0) as BulkImportQueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_query;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
}


export class RegularQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleQuery(): SingleQueryContext {
		return this.getTypedRuleContext(SingleQueryContext, 0) as SingleQueryContext;
	}
	public union_list(): UnionContext[] {
		return this.getTypedRuleContexts(UnionContext) as UnionContext[];
	}
	public union(i: number): UnionContext {
		return this.getTypedRuleContext(UnionContext, i) as UnionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_regularQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRegularQuery) {
	 		listener.enterRegularQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRegularQuery) {
	 		listener.exitRegularQuery(this);
		}
	}
}


export class BulkImportQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public periodicCommitHint(): PeriodicCommitHintContext {
		return this.getTypedRuleContext(PeriodicCommitHintContext, 0) as PeriodicCommitHintContext;
	}
	public loadCSVQuery(): LoadCSVQueryContext {
		return this.getTypedRuleContext(LoadCSVQueryContext, 0) as LoadCSVQueryContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_bulkImportQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterBulkImportQuery) {
	 		listener.enterBulkImportQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitBulkImportQuery) {
	 		listener.exitBulkImportQuery(this);
		}
	}
}


export class SingleQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_singleQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSingleQuery) {
	 		listener.enterSingleQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSingleQuery) {
	 		listener.exitSingleQuery(this);
		}
	}
}


export class PeriodicCommitHintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USING(): TerminalNode {
		return this.getToken(CypherParser.USING, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public PERIODIC(): TerminalNode {
		return this.getToken(CypherParser.PERIODIC, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(CypherParser.COMMIT, 0);
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_periodicCommitHint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPeriodicCommitHint) {
	 		listener.enterPeriodicCommitHint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPeriodicCommitHint) {
	 		listener.exitPeriodicCommitHint(this);
		}
	}
}


export class LoadCSVQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public loadCSVClause(): LoadCSVClauseContext {
		return this.getTypedRuleContext(LoadCSVClauseContext, 0) as LoadCSVClauseContext;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_loadCSVQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLoadCSVQuery) {
	 		listener.enterLoadCSVQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLoadCSVQuery) {
	 		listener.exitLoadCSVQuery(this);
		}
	}
}


export class UnionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION(): TerminalNode {
		return this.getToken(CypherParser.UNION, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public singleQuery(): SingleQueryContext {
		return this.getTypedRuleContext(SingleQueryContext, 0) as SingleQueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_union;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUnion) {
	 		listener.enterUnion(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUnion) {
	 		listener.exitUnion(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public loadCSVClause(): LoadCSVClauseContext {
		return this.getTypedRuleContext(LoadCSVClauseContext, 0) as LoadCSVClauseContext;
	}
	public startClause(): StartClauseContext {
		return this.getTypedRuleContext(StartClauseContext, 0) as StartClauseContext;
	}
	public matchClause(): MatchClauseContext {
		return this.getTypedRuleContext(MatchClauseContext, 0) as MatchClauseContext;
	}
	public unwindClause(): UnwindClauseContext {
		return this.getTypedRuleContext(UnwindClauseContext, 0) as UnwindClauseContext;
	}
	public mergeClause(): MergeClauseContext {
		return this.getTypedRuleContext(MergeClauseContext, 0) as MergeClauseContext;
	}
	public createClause(): CreateClauseContext {
		return this.getTypedRuleContext(CreateClauseContext, 0) as CreateClauseContext;
	}
	public createUniqueClause(): CreateUniqueClauseContext {
		return this.getTypedRuleContext(CreateUniqueClauseContext, 0) as CreateUniqueClauseContext;
	}
	public setClause(): SetClauseContext {
		return this.getTypedRuleContext(SetClauseContext, 0) as SetClauseContext;
	}
	public deleteClause(): DeleteClauseContext {
		return this.getTypedRuleContext(DeleteClauseContext, 0) as DeleteClauseContext;
	}
	public removeClause(): RemoveClauseContext {
		return this.getTypedRuleContext(RemoveClauseContext, 0) as RemoveClauseContext;
	}
	public foreachClause(): ForeachClauseContext {
		return this.getTypedRuleContext(ForeachClauseContext, 0) as ForeachClauseContext;
	}
	public withClause(): WithClauseContext {
		return this.getTypedRuleContext(WithClauseContext, 0) as WithClauseContext;
	}
	public returnClause(): ReturnClauseContext {
		return this.getTypedRuleContext(ReturnClauseContext, 0) as ReturnClauseContext;
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
	public subqueryClause(): SubqueryClauseContext {
		return this.getTypedRuleContext(SubqueryClauseContext, 0) as SubqueryClauseContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_clause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterClause) {
	 		listener.enterClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitClause) {
	 		listener.exitClause(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public createIndex(): CreateIndexContext {
		return this.getTypedRuleContext(CreateIndexContext, 0) as CreateIndexContext;
	}
	public dropIndex(): DropIndexContext {
		return this.getTypedRuleContext(DropIndexContext, 0) as DropIndexContext;
	}
	public createUniqueConstraint(): CreateUniqueConstraintContext {
		return this.getTypedRuleContext(CreateUniqueConstraintContext, 0) as CreateUniqueConstraintContext;
	}
	public dropUniqueConstraint(): DropUniqueConstraintContext {
		return this.getTypedRuleContext(DropUniqueConstraintContext, 0) as DropUniqueConstraintContext;
	}
	public createNodeKeyConstraint(): CreateNodeKeyConstraintContext {
		return this.getTypedRuleContext(CreateNodeKeyConstraintContext, 0) as CreateNodeKeyConstraintContext;
	}
	public dropNodeKeyConstraint(): DropNodeKeyConstraintContext {
		return this.getTypedRuleContext(DropNodeKeyConstraintContext, 0) as DropNodeKeyConstraintContext;
	}
	public createNodePropertyExistenceConstraint(): CreateNodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(CreateNodePropertyExistenceConstraintContext, 0) as CreateNodePropertyExistenceConstraintContext;
	}
	public dropNodePropertyExistenceConstraint(): DropNodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(DropNodePropertyExistenceConstraintContext, 0) as DropNodePropertyExistenceConstraintContext;
	}
	public createRelationshipPropertyExistenceConstraint(): CreateRelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(CreateRelationshipPropertyExistenceConstraintContext, 0) as CreateRelationshipPropertyExistenceConstraintContext;
	}
	public dropRelationshipPropertyExistenceConstraint(): DropRelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(DropRelationshipPropertyExistenceConstraintContext, 0) as DropRelationshipPropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_command;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
}


export class SystemCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multidatabaseCommand(): MultidatabaseCommandContext {
		return this.getTypedRuleContext(MultidatabaseCommandContext, 0) as MultidatabaseCommandContext;
	}
	public userCommand(): UserCommandContext {
		return this.getTypedRuleContext(UserCommandContext, 0) as UserCommandContext;
	}
	public privilegeCommand(): PrivilegeCommandContext {
		return this.getTypedRuleContext(PrivilegeCommandContext, 0) as PrivilegeCommandContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_systemCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSystemCommand) {
	 		listener.enterSystemCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSystemCommand) {
	 		listener.exitSystemCommand(this);
		}
	}
}


export class MultidatabaseCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public showDatabase(): ShowDatabaseContext {
		return this.getTypedRuleContext(ShowDatabaseContext, 0) as ShowDatabaseContext;
	}
	public createDatabase(): CreateDatabaseContext {
		return this.getTypedRuleContext(CreateDatabaseContext, 0) as CreateDatabaseContext;
	}
	public dropDatabase(): DropDatabaseContext {
		return this.getTypedRuleContext(DropDatabaseContext, 0) as DropDatabaseContext;
	}
	public startDatabase(): StartDatabaseContext {
		return this.getTypedRuleContext(StartDatabaseContext, 0) as StartDatabaseContext;
	}
	public stopDatabase(): StopDatabaseContext {
		return this.getTypedRuleContext(StopDatabaseContext, 0) as StopDatabaseContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_multidatabaseCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMultidatabaseCommand) {
	 		listener.enterMultidatabaseCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMultidatabaseCommand) {
	 		listener.exitMultidatabaseCommand(this);
		}
	}
}


export class UserCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public showRoles(): ShowRolesContext {
		return this.getTypedRuleContext(ShowRolesContext, 0) as ShowRolesContext;
	}
	public createRole(): CreateRoleContext {
		return this.getTypedRuleContext(CreateRoleContext, 0) as CreateRoleContext;
	}
	public dropRole(): DropRoleContext {
		return this.getTypedRuleContext(DropRoleContext, 0) as DropRoleContext;
	}
	public showUsers(): ShowUsersContext {
		return this.getTypedRuleContext(ShowUsersContext, 0) as ShowUsersContext;
	}
	public createUser(): CreateUserContext {
		return this.getTypedRuleContext(CreateUserContext, 0) as CreateUserContext;
	}
	public dropUser(): DropUserContext {
		return this.getTypedRuleContext(DropUserContext, 0) as DropUserContext;
	}
	public alterUser(): AlterUserContext {
		return this.getTypedRuleContext(AlterUserContext, 0) as AlterUserContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_userCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUserCommand) {
	 		listener.enterUserCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUserCommand) {
	 		listener.exitUserCommand(this);
		}
	}
}


export class PrivilegeCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public showPrivileges(): ShowPrivilegesContext {
		return this.getTypedRuleContext(ShowPrivilegesContext, 0) as ShowPrivilegesContext;
	}
	public grantPrivilege(): GrantPrivilegeContext {
		return this.getTypedRuleContext(GrantPrivilegeContext, 0) as GrantPrivilegeContext;
	}
	public denyPrivilege(): DenyPrivilegeContext {
		return this.getTypedRuleContext(DenyPrivilegeContext, 0) as DenyPrivilegeContext;
	}
	public revokePrivilege(): RevokePrivilegeContext {
		return this.getTypedRuleContext(RevokePrivilegeContext, 0) as RevokePrivilegeContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_privilegeCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPrivilegeCommand) {
	 		listener.enterPrivilegeCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPrivilegeCommand) {
	 		listener.exitPrivilegeCommand(this);
		}
	}
}


export class ShowRolesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLES(): TerminalNode {
		return this.getToken(CypherParser.ROLES, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public USERS(): TerminalNode {
		return this.getToken(CypherParser.USERS, 0);
	}
	public POPULATED(): TerminalNode {
		return this.getToken(CypherParser.POPULATED, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showRoles;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowRoles) {
	 		listener.enterShowRoles(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowRoles) {
	 		listener.exitShowRoles(this);
		}
	}
}


export class CreateRoleContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public copyRole(): CopyRoleContext {
		return this.getTypedRuleContext(CopyRoleContext, 0) as CopyRoleContext;
	}
	public orReplace(): OrReplaceContext {
		return this.getTypedRuleContext(OrReplaceContext, 0) as OrReplaceContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createRole;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateRole) {
	 		listener.enterCreateRole(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateRole) {
	 		listener.exitCreateRole(this);
		}
	}
}


export class CopyRoleContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public COPY(): TerminalNode {
		return this.getToken(CypherParser.COPY, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(CypherParser.OF, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_copyRole;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCopyRole) {
	 		listener.enterCopyRole(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCopyRole) {
	 		listener.exitCopyRole(this);
		}
	}
}


export class DropRoleContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropRole;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropRole) {
	 		listener.enterDropRole(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropRole) {
	 		listener.exitDropRole(this);
		}
	}
}


export class ShowUsersContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public USERS(): TerminalNode {
		return this.getToken(CypherParser.USERS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showUsers;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowUsers) {
	 		listener.enterShowUsers(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowUsers) {
	 		listener.exitShowUsers(this);
		}
	}
}


export class CreateUserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public setPassword(): SetPasswordContext {
		return this.getTypedRuleContext(SetPasswordContext, 0) as SetPasswordContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public setStatus(): SetStatusContext {
		return this.getTypedRuleContext(SetStatusContext, 0) as SetStatusContext;
	}
	public orReplace(): OrReplaceContext {
		return this.getTypedRuleContext(OrReplaceContext, 0) as OrReplaceContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createUser;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateUser) {
	 		listener.enterCreateUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateUser) {
	 		listener.exitCreateUser(this);
		}
	}
}


export class DropUserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropUser;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropUser) {
	 		listener.enterDropUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropUser) {
	 		listener.exitDropUser(this);
		}
	}
}


export class AlterUserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(CypherParser.ALTER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(CypherParser.CURRENT, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public PASSWORD(): TerminalNode {
		return this.getToken(CypherParser.PASSWORD, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public password_list(): PasswordContext[] {
		return this.getTypedRuleContexts(PasswordContext) as PasswordContext[];
	}
	public password(i: number): PasswordContext {
		return this.getTypedRuleContext(PasswordContext, i) as PasswordContext;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public setPassword(): SetPasswordContext {
		return this.getTypedRuleContext(SetPasswordContext, 0) as SetPasswordContext;
	}
	public setStatus(): SetStatusContext {
		return this.getTypedRuleContext(SetStatusContext, 0) as SetStatusContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_alterUser;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAlterUser) {
	 		listener.enterAlterUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAlterUser) {
	 		listener.exitAlterUser(this);
		}
	}
}


export class ShowPrivilegesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(CypherParser.PRIVILEGES, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showPrivileges;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowPrivileges) {
	 		listener.enterShowPrivileges(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowPrivileges) {
	 		listener.exitShowPrivileges(this);
		}
	}
}


export class GrantPrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GRANT(): TerminalNode {
		return this.getToken(CypherParser.GRANT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		return this.getTypedRuleContext(DatasbasePrivilegeContext, 0) as DatasbasePrivilegeContext;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public databaseScope(): DatabaseScopeContext {
		return this.getTypedRuleContext(DatabaseScopeContext, 0) as DatabaseScopeContext;
	}
	public grantableGraphPrivileges(): GrantableGraphPrivilegesContext {
		return this.getTypedRuleContext(GrantableGraphPrivilegesContext, 0) as GrantableGraphPrivilegesContext;
	}
	public graphScope(): GraphScopeContext {
		return this.getTypedRuleContext(GraphScopeContext, 0) as GraphScopeContext;
	}
	public elementScope(): ElementScopeContext {
		return this.getTypedRuleContext(ElementScopeContext, 0) as ElementScopeContext;
	}
	public dbmsPrivilege(): DbmsPrivilegeContext {
		return this.getTypedRuleContext(DbmsPrivilegeContext, 0) as DbmsPrivilegeContext;
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_grantPrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterGrantPrivilege) {
	 		listener.enterGrantPrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitGrantPrivilege) {
	 		listener.exitGrantPrivilege(this);
		}
	}
}


export class DenyPrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DENY(): TerminalNode {
		return this.getToken(CypherParser.DENY, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		return this.getTypedRuleContext(DatasbasePrivilegeContext, 0) as DatasbasePrivilegeContext;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public databaseScope(): DatabaseScopeContext {
		return this.getTypedRuleContext(DatabaseScopeContext, 0) as DatabaseScopeContext;
	}
	public grantableGraphPrivileges(): GrantableGraphPrivilegesContext {
		return this.getTypedRuleContext(GrantableGraphPrivilegesContext, 0) as GrantableGraphPrivilegesContext;
	}
	public graphScope(): GraphScopeContext {
		return this.getTypedRuleContext(GraphScopeContext, 0) as GraphScopeContext;
	}
	public elementScope(): ElementScopeContext {
		return this.getTypedRuleContext(ElementScopeContext, 0) as ElementScopeContext;
	}
	public dbmsPrivilege(): DbmsPrivilegeContext {
		return this.getTypedRuleContext(DbmsPrivilegeContext, 0) as DbmsPrivilegeContext;
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_denyPrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDenyPrivilege) {
	 		listener.enterDenyPrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDenyPrivilege) {
	 		listener.exitDenyPrivilege(this);
		}
	}
}


export class RevokePrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REVOKE(): TerminalNode {
		return this.getToken(CypherParser.REVOKE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public revokePart(): RevokePartContext {
		return this.getTypedRuleContext(RevokePartContext, 0) as RevokePartContext;
	}
	public GRANT(): TerminalNode {
		return this.getToken(CypherParser.GRANT, 0);
	}
	public DENY(): TerminalNode {
		return this.getToken(CypherParser.DENY, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_revokePrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRevokePrivilege) {
	 		listener.enterRevokePrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRevokePrivilege) {
	 		listener.exitRevokePrivilege(this);
		}
	}
}


export class RevokePartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		return this.getTypedRuleContext(DatasbasePrivilegeContext, 0) as DatasbasePrivilegeContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public databaseScope(): DatabaseScopeContext {
		return this.getTypedRuleContext(DatabaseScopeContext, 0) as DatabaseScopeContext;
	}
	public revokeableGraphPrivileges(): RevokeableGraphPrivilegesContext {
		return this.getTypedRuleContext(RevokeableGraphPrivilegesContext, 0) as RevokeableGraphPrivilegesContext;
	}
	public graphScope(): GraphScopeContext {
		return this.getTypedRuleContext(GraphScopeContext, 0) as GraphScopeContext;
	}
	public dbmsPrivilege(): DbmsPrivilegeContext {
		return this.getTypedRuleContext(DbmsPrivilegeContext, 0) as DbmsPrivilegeContext;
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_revokePart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRevokePart) {
	 		listener.enterRevokePart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRevokePart) {
	 		listener.exitRevokePart(this);
		}
	}
}


export class DatabaseScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(CypherParser.DATABASES, 0);
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_databaseScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDatabaseScope) {
	 		listener.enterDatabaseScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDatabaseScope) {
	 		listener.exitDatabaseScope(this);
		}
	}
}


export class GraphScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public GRAPH(): TerminalNode {
		return this.getToken(CypherParser.GRAPH, 0);
	}
	public GRAPHS(): TerminalNode {
		return this.getToken(CypherParser.GRAPHS, 0);
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_graphScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterGraphScope) {
	 		listener.enterGraphScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitGraphScope) {
	 		listener.exitGraphScope(this);
		}
	}
}


export class RolesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_roles;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRoles) {
	 		listener.enterRoles(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRoles) {
	 		listener.exitRoles(this);
		}
	}
}


export class GrantableGraphPrivilegesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public revokeableGraphPrivileges(): RevokeableGraphPrivilegesContext {
		return this.getTypedRuleContext(RevokeableGraphPrivilegesContext, 0) as RevokeableGraphPrivilegesContext;
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public propertiesList(): PropertiesListContext {
		return this.getTypedRuleContext(PropertiesListContext, 0) as PropertiesListContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_grantableGraphPrivileges;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterGrantableGraphPrivileges) {
	 		listener.enterGrantableGraphPrivileges(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitGrantableGraphPrivileges) {
	 		listener.exitGrantableGraphPrivileges(this);
		}
	}
}


export class RevokeableGraphPrivilegesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRAVERSE(): TerminalNode {
		return this.getToken(CypherParser.TRAVERSE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(CypherParser.READ, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public propertiesList(): PropertiesListContext {
		return this.getTypedRuleContext(PropertiesListContext, 0) as PropertiesListContext;
	}
	public WRITE(): TerminalNode {
		return this.getToken(CypherParser.WRITE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_revokeableGraphPrivileges;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRevokeableGraphPrivileges) {
	 		listener.enterRevokeableGraphPrivileges(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRevokeableGraphPrivileges) {
	 		listener.exitRevokeableGraphPrivileges(this);
		}
	}
}


export class DatasbasePrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACCESS(): TerminalNode {
		return this.getToken(CypherParser.ACCESS, 0);
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public STOP(): TerminalNode {
		return this.getToken(CypherParser.STOP, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(CypherParser.INDEXES, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public MANAGEMENT(): TerminalNode {
		return this.getToken(CypherParser.MANAGEMENT, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINTS, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(CypherParser.NEW, 0);
	}
	public LABEL(): TerminalNode {
		return this.getToken(CypherParser.LABEL, 0);
	}
	public LABELS(): TerminalNode {
		return this.getToken(CypherParser.LABELS, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(CypherParser.TYPE, 0);
	}
	public TYPES(): TerminalNode {
		return this.getToken(CypherParser.TYPES, 0);
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(CypherParser.NAME, 0);
	}
	public NAMES(): TerminalNode {
		return this.getToken(CypherParser.NAMES, 0);
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(CypherParser.PROPERTY, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(CypherParser.PRIVILEGES, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_datasbasePrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDatasbasePrivilege) {
	 		listener.enterDatasbasePrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDatasbasePrivilege) {
	 		listener.exitDatasbasePrivilege(this);
		}
	}
}


export class DbmsPrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public MANAGEMENT(): TerminalNode {
		return this.getToken(CypherParser.MANAGEMENT, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(CypherParser.ASSIGN, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dbmsPrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDbmsPrivilege) {
	 		listener.enterDbmsPrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDbmsPrivilege) {
	 		listener.exitDbmsPrivilege(this);
		}
	}
}


export class ElementScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public propertiesList(): PropertiesListContext {
		return this.getTypedRuleContext(PropertiesListContext, 0) as PropertiesListContext;
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public RELATIONSHIPS(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIPS, 0);
	}
	public propertyScope(): PropertyScopeContext {
		return this.getTypedRuleContext(PropertyScopeContext, 0) as PropertyScopeContext;
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public NODES(): TerminalNode {
		return this.getToken(CypherParser.NODES, 0);
	}
	public ELEMENT(): TerminalNode {
		return this.getToken(CypherParser.ELEMENT, 0);
	}
	public ELEMENTS(): TerminalNode {
		return this.getToken(CypherParser.ELEMENTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_elementScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterElementScope) {
	 		listener.enterElementScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitElementScope) {
	 		listener.exitElementScope(this);
		}
	}
}


export class PropertiesListContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertiesList;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertiesList) {
	 		listener.enterPropertiesList(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertiesList) {
	 		listener.exitPropertiesList(this);
		}
	}
}


export class PropertyScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyScope) {
	 		listener.enterPropertyScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyScope) {
	 		listener.exitPropertyScope(this);
		}
	}
}


export class ShowDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(CypherParser.DEFAULT, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(CypherParser.DATABASES, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowDatabase) {
	 		listener.enterShowDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowDatabase) {
	 		listener.exitShowDatabase(this);
		}
	}
}


export class CreateDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public orReplace(): OrReplaceContext {
		return this.getTypedRuleContext(OrReplaceContext, 0) as OrReplaceContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateDatabase) {
	 		listener.enterCreateDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateDatabase) {
	 		listener.exitCreateDatabase(this);
		}
	}
}


export class DropDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropDatabase) {
	 		listener.enterDropDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropDatabase) {
	 		listener.exitDropDatabase(this);
		}
	}
}


export class StartDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_startDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStartDatabase) {
	 		listener.enterStartDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStartDatabase) {
	 		listener.exitStartDatabase(this);
		}
	}
}


export class StopDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STOP(): TerminalNode {
		return this.getToken(CypherParser.STOP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_stopDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStopDatabase) {
	 		listener.enterStopDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStopDatabase) {
	 		listener.exitStopDatabase(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_ifNotExists;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIfNotExists) {
	 		listener.enterIfNotExists(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIfNotExists) {
	 		listener.exitIfNotExists(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_ifExists;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIfExists) {
	 		listener.enterIfExists(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIfExists) {
	 		listener.exitIfExists(this);
		}
	}
}


export class OrReplaceContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OR(): TerminalNode {
		return this.getToken(CypherParser.OR, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(CypherParser.REPLACE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_orReplace;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrReplace) {
	 		listener.enterOrReplace(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrReplace) {
	 		listener.exitOrReplace(this);
		}
	}
}


export class SetPasswordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public PASSWORD(): TerminalNode {
		return this.getToken(CypherParser.PASSWORD, 0);
	}
	public password(): PasswordContext {
		return this.getTypedRuleContext(PasswordContext, 0) as PasswordContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public passwordStatus(): PasswordStatusContext {
		return this.getTypedRuleContext(PasswordStatusContext, 0) as PasswordStatusContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setPassword;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetPassword) {
	 		listener.enterSetPassword(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetPassword) {
	 		listener.exitSetPassword(this);
		}
	}
}


export class PasswordStatusContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGE(): TerminalNode {
		return this.getToken(CypherParser.CHANGE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public REQUIRED(): TerminalNode {
		return this.getToken(CypherParser.REQUIRED, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_passwordStatus;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPasswordStatus) {
	 		listener.enterPasswordStatus(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPasswordStatus) {
	 		listener.exitPasswordStatus(this);
		}
	}
}


export class SetStatusContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public STATUS(): TerminalNode {
		return this.getToken(CypherParser.STATUS, 0);
	}
	public userStatus(): UserStatusContext {
		return this.getTypedRuleContext(UserStatusContext, 0) as UserStatusContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setStatus;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetStatus) {
	 		listener.enterSetStatus(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetStatus) {
	 		listener.exitSetStatus(this);
		}
	}
}


export class UserStatusContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACTIVE(): TerminalNode {
		return this.getToken(CypherParser.ACTIVE, 0);
	}
	public SUSPENDED(): TerminalNode {
		return this.getToken(CypherParser.SUSPENDED, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_userStatus;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUserStatus) {
	 		listener.enterUserStatus(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUserStatus) {
	 		listener.exitUserStatus(this);
		}
	}
}


export class CreateUniqueConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public uniqueConstraint(): UniqueConstraintContext {
		return this.getTypedRuleContext(UniqueConstraintContext, 0) as UniqueConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createUniqueConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateUniqueConstraint) {
	 		listener.enterCreateUniqueConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateUniqueConstraint) {
	 		listener.exitCreateUniqueConstraint(this);
		}
	}
}


export class CreateNodeKeyConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodeKeyConstraint(): NodeKeyConstraintContext {
		return this.getTypedRuleContext(NodeKeyConstraintContext, 0) as NodeKeyConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createNodeKeyConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateNodeKeyConstraint) {
	 		listener.enterCreateNodeKeyConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateNodeKeyConstraint) {
	 		listener.exitCreateNodeKeyConstraint(this);
		}
	}
}


export class CreateNodePropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodePropertyExistenceConstraint(): NodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(NodePropertyExistenceConstraintContext, 0) as NodePropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createNodePropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateNodePropertyExistenceConstraint) {
	 		listener.enterCreateNodePropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateNodePropertyExistenceConstraint) {
	 		listener.exitCreateNodePropertyExistenceConstraint(this);
		}
	}
}


export class CreateRelationshipPropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public relationshipPropertyExistenceConstraint(): RelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(RelationshipPropertyExistenceConstraintContext, 0) as RelationshipPropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createRelationshipPropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateRelationshipPropertyExistenceConstraint) {
	 		listener.enterCreateRelationshipPropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateRelationshipPropertyExistenceConstraint) {
	 		listener.exitCreateRelationshipPropertyExistenceConstraint(this);
		}
	}
}


export class CreateIndexContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createIndex;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateIndex) {
	 		listener.enterCreateIndex(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateIndex) {
	 		listener.exitCreateIndex(this);
		}
	}
}


export class DropUniqueConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public uniqueConstraint(): UniqueConstraintContext {
		return this.getTypedRuleContext(UniqueConstraintContext, 0) as UniqueConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropUniqueConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropUniqueConstraint) {
	 		listener.enterDropUniqueConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropUniqueConstraint) {
	 		listener.exitDropUniqueConstraint(this);
		}
	}
}


export class DropNodeKeyConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodeKeyConstraint(): NodeKeyConstraintContext {
		return this.getTypedRuleContext(NodeKeyConstraintContext, 0) as NodeKeyConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropNodeKeyConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropNodeKeyConstraint) {
	 		listener.enterDropNodeKeyConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropNodeKeyConstraint) {
	 		listener.exitDropNodeKeyConstraint(this);
		}
	}
}


export class DropNodePropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodePropertyExistenceConstraint(): NodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(NodePropertyExistenceConstraintContext, 0) as NodePropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropNodePropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropNodePropertyExistenceConstraint) {
	 		listener.enterDropNodePropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropNodePropertyExistenceConstraint) {
	 		listener.exitDropNodePropertyExistenceConstraint(this);
		}
	}
}


export class DropRelationshipPropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public relationshipPropertyExistenceConstraint(): RelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(RelationshipPropertyExistenceConstraintContext, 0) as RelationshipPropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropRelationshipPropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropRelationshipPropertyExistenceConstraint) {
	 		listener.enterDropRelationshipPropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropRelationshipPropertyExistenceConstraint) {
	 		listener.exitDropRelationshipPropertyExistenceConstraint(this);
		}
	}
}


export class DropIndexContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropIndex;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropIndex) {
	 		listener.enterDropIndex(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropIndex) {
	 		listener.exitDropIndex(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public propertyKeys(): PropertyKeysContext {
		return this.getTypedRuleContext(PropertyKeysContext, 0) as PropertyKeysContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_index;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIndex) {
	 		listener.enterIndex(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIndex) {
	 		listener.exitIndex(this);
		}
	}
}


export class UniqueConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_uniqueConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUniqueConstraint) {
	 		listener.enterUniqueConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUniqueConstraint) {
	 		listener.exitUniqueConstraint(this);
		}
	}
}


export class NodeKeyConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public propertyExpressions(): PropertyExpressionsContext {
		return this.getTypedRuleContext(PropertyExpressionsContext, 0) as PropertyExpressionsContext;
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(CypherParser.KEY, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeKeyConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeKeyConstraint) {
	 		listener.enterNodeKeyConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeKeyConstraint) {
	 		listener.exitNodeKeyConstraint(this);
		}
	}
}


export class NodePropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodePropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodePropertyExistenceConstraint) {
	 		listener.enterNodePropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodePropertyExistenceConstraint) {
	 		listener.exitNodePropertyExistenceConstraint(this);
		}
	}
}


export class RelationshipPropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public relationshipPatternSyntax(): RelationshipPatternSyntaxContext {
		return this.getTypedRuleContext(RelationshipPatternSyntaxContext, 0) as RelationshipPatternSyntaxContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPropertyExistenceConstraint) {
	 		listener.enterRelationshipPropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPropertyExistenceConstraint) {
	 		listener.exitRelationshipPropertyExistenceConstraint(this);
		}
	}
}


export class RelationshipPatternSyntaxContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dash_list(): DashContext[] {
		return this.getTypedRuleContexts(DashContext) as DashContext[];
	}
	public dash(i: number): DashContext {
		return this.getTypedRuleContext(DashContext, i) as DashContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public relType(): RelTypeContext {
		return this.getTypedRuleContext(RelTypeContext, 0) as RelTypeContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public rightArrowHead(): RightArrowHeadContext {
		return this.getTypedRuleContext(RightArrowHeadContext, 0) as RightArrowHeadContext;
	}
	public leftArrowHead(): LeftArrowHeadContext {
		return this.getTypedRuleContext(LeftArrowHeadContext, 0) as LeftArrowHeadContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPatternSyntax;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPatternSyntax) {
	 		listener.enterRelationshipPatternSyntax(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPatternSyntax) {
	 		listener.exitRelationshipPatternSyntax(this);
		}
	}
}


export class LoadCSVClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOAD(): TerminalNode {
		return this.getToken(CypherParser.LOAD, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CSV(): TerminalNode {
		return this.getToken(CypherParser.CSV, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public HEADERS(): TerminalNode {
		return this.getToken(CypherParser.HEADERS, 0);
	}
	public FIELDTERMINATOR(): TerminalNode {
		return this.getToken(CypherParser.FIELDTERMINATOR, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_loadCSVClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLoadCSVClause) {
	 		listener.enterLoadCSVClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLoadCSVClause) {
	 		listener.exitLoadCSVClause(this);
		}
	}
}


export class MatchClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(CypherParser.OPTIONAL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public hint_list(): HintContext[] {
		return this.getTypedRuleContexts(HintContext) as HintContext[];
	}
	public hint(i: number): HintContext {
		return this.getTypedRuleContext(HintContext, i) as HintContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_matchClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMatchClause) {
	 		listener.enterMatchClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMatchClause) {
	 		listener.exitMatchClause(this);
		}
	}
}


export class UnwindClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNWIND(): TerminalNode {
		return this.getToken(CypherParser.UNWIND, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_unwindClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUnwindClause) {
	 		listener.enterUnwindClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUnwindClause) {
	 		listener.exitUnwindClause(this);
		}
	}
}


export class MergeClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MERGE(): TerminalNode {
		return this.getToken(CypherParser.MERGE, 0);
	}
	public patternPart(): PatternPartContext {
		return this.getTypedRuleContext(PatternPartContext, 0) as PatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public mergeAction_list(): MergeActionContext[] {
		return this.getTypedRuleContexts(MergeActionContext) as MergeActionContext[];
	}
	public mergeAction(i: number): MergeActionContext {
		return this.getTypedRuleContext(MergeActionContext, i) as MergeActionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mergeClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMergeClause) {
	 		listener.enterMergeClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMergeClause) {
	 		listener.exitMergeClause(this);
		}
	}
}


export class MergeActionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public setClause(): SetClauseContext {
		return this.getTypedRuleContext(SetClauseContext, 0) as SetClauseContext;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mergeAction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMergeAction) {
	 		listener.enterMergeAction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMergeAction) {
	 		listener.exitMergeAction(this);
		}
	}
}


export class CreateClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateClause) {
	 		listener.enterCreateClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateClause) {
	 		listener.exitCreateClause(this);
		}
	}
}


export class CreateUniqueClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createUniqueClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateUniqueClause) {
	 		listener.enterCreateUniqueClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateUniqueClause) {
	 		listener.exitCreateUniqueClause(this);
		}
	}
}


export class SetClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public setItem_list(): SetItemContext[] {
		return this.getTypedRuleContexts(SetItemContext) as SetItemContext[];
	}
	public setItem(i: number): SetItemContext {
		return this.getTypedRuleContext(SetItemContext, i) as SetItemContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetClause) {
	 		listener.enterSetClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetClause) {
	 		listener.exitSetClause(this);
		}
	}
}


export class SetItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabels(): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, 0) as NodeLabelsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetItem) {
	 		listener.enterSetItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetItem) {
	 		listener.exitSetItem(this);
		}
	}
}


export class DeleteClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(CypherParser.DELETE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DETACH(): TerminalNode {
		return this.getToken(CypherParser.DETACH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_deleteClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDeleteClause) {
	 		listener.enterDeleteClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDeleteClause) {
	 		listener.exitDeleteClause(this);
		}
	}
}


export class RemoveClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public removeItem_list(): RemoveItemContext[] {
		return this.getTypedRuleContexts(RemoveItemContext) as RemoveItemContext[];
	}
	public removeItem(i: number): RemoveItemContext {
		return this.getTypedRuleContext(RemoveItemContext, i) as RemoveItemContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_removeClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRemoveClause) {
	 		listener.enterRemoveClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRemoveClause) {
	 		listener.exitRemoveClause(this);
		}
	}
}


export class RemoveItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabels(): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, 0) as NodeLabelsContext;
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_removeItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRemoveItem) {
	 		listener.enterRemoveItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRemoveItem) {
	 		listener.exitRemoveItem(this);
		}
	}
}


export class ForeachClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOREACH(): TerminalNode {
		return this.getToken(CypherParser.FOREACH, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_foreachClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterForeachClause) {
	 		listener.enterForeachClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitForeachClause) {
	 		listener.exitForeachClause(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public returnBody(): ReturnBodyContext {
		return this.getTypedRuleContext(ReturnBodyContext, 0) as ReturnBodyContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_withClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterWithClause) {
	 		listener.enterWithClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitWithClause) {
	 		listener.exitWithClause(this);
		}
	}
}


export class ReturnClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(CypherParser.RETURN, 0);
	}
	public returnBody(): ReturnBodyContext {
		return this.getTypedRuleContext(ReturnBodyContext, 0) as ReturnBodyContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnClause) {
	 		listener.enterReturnClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnClause) {
	 		listener.exitReturnClause(this);
		}
	}
}


export class ReturnBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public returnItems(): ReturnItemsContext {
		return this.getTypedRuleContext(ReturnItemsContext, 0) as ReturnItemsContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public order(): OrderContext {
		return this.getTypedRuleContext(OrderContext, 0) as OrderContext;
	}
	public skip(): SkipContext {
		return this.getTypedRuleContext(SkipContext, 0) as SkipContext;
	}
	public limit(): LimitContext {
		return this.getTypedRuleContext(LimitContext, 0) as LimitContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnBody) {
	 		listener.enterReturnBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnBody) {
	 		listener.exitReturnBody(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureInvocation(): ProcedureInvocationContext {
		return this.getTypedRuleContext(ProcedureInvocationContext, 0) as ProcedureInvocationContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public procedureResults(): ProcedureResultsContext {
		return this.getTypedRuleContext(ProcedureResultsContext, 0) as ProcedureResultsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_func;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunc) {
	 		listener.enterFunc(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunc) {
	 		listener.exitFunc(this);
		}
	}
}


export class ReturnItemsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public returnItem_list(): ReturnItemContext[] {
		return this.getTypedRuleContexts(ReturnItemContext) as ReturnItemContext[];
	}
	public returnItem(i: number): ReturnItemContext {
		return this.getTypedRuleContext(ReturnItemContext, i) as ReturnItemContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public func(): FuncContext {
		return this.getTypedRuleContext(FuncContext, 0) as FuncContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnItems;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnItems) {
	 		listener.enterReturnItems(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnItems) {
	 		listener.exitReturnItems(this);
		}
	}
}


export class ReturnItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public asMapping(): AsMappingContext {
		return this.getTypedRuleContext(AsMappingContext, 0) as AsMappingContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnItem) {
	 		listener.enterReturnItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnItem) {
	 		listener.exitReturnItem(this);
		}
	}
}


export class AsMappingContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_asMapping;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAsMapping) {
	 		listener.enterAsMapping(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAsMapping) {
	 		listener.exitAsMapping(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public procedureInvocation(): ProcedureInvocationContext {
		return this.getTypedRuleContext(ProcedureInvocationContext, 0) as ProcedureInvocationContext;
	}
	public procedureResults(): ProcedureResultsContext {
		return this.getTypedRuleContext(ProcedureResultsContext, 0) as ProcedureResultsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_call;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
}


export class SubqueryClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_subqueryClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSubqueryClause) {
	 		listener.enterSubqueryClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSubqueryClause) {
	 		listener.exitSubqueryClause(this);
		}
	}
}


export class SubqueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_subquery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
}


export class ProcedureInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureInvocationBody(): ProcedureInvocationBodyContext {
		return this.getTypedRuleContext(ProcedureInvocationBodyContext, 0) as ProcedureInvocationBodyContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public procedureArguments(): ProcedureArgumentsContext {
		return this.getTypedRuleContext(ProcedureArgumentsContext, 0) as ProcedureArgumentsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureInvocation) {
	 		listener.enterProcedureInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureInvocation) {
	 		listener.exitProcedureInvocation(this);
		}
	}
}


export class ProcedureInvocationBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public procedureName(): ProcedureNameContext {
		return this.getTypedRuleContext(ProcedureNameContext, 0) as ProcedureNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureInvocationBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureInvocationBody) {
	 		listener.enterProcedureInvocationBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureInvocationBody) {
	 		listener.exitProcedureInvocationBody(this);
		}
	}
}


export class ProcedureArgumentsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureArguments;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureArguments) {
	 		listener.enterProcedureArguments(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureArguments) {
	 		listener.exitProcedureArguments(this);
		}
	}
}


export class ProcedureResultsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YIELD(): TerminalNode {
		return this.getToken(CypherParser.YIELD, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public procedureResult_list(): ProcedureResultContext[] {
		return this.getTypedRuleContexts(ProcedureResultContext) as ProcedureResultContext[];
	}
	public procedureResult(i: number): ProcedureResultContext {
		return this.getTypedRuleContext(ProcedureResultContext, i) as ProcedureResultContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureResults;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureResults) {
	 		listener.enterProcedureResults(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureResults) {
	 		listener.exitProcedureResults(this);
		}
	}
}


export class ProcedureResultContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasedProcedureResult(): AliasedProcedureResultContext {
		return this.getTypedRuleContext(AliasedProcedureResultContext, 0) as AliasedProcedureResultContext;
	}
	public simpleProcedureResult(): SimpleProcedureResultContext {
		return this.getTypedRuleContext(SimpleProcedureResultContext, 0) as SimpleProcedureResultContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureResult;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureResult) {
	 		listener.enterProcedureResult(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureResult) {
	 		listener.exitProcedureResult(this);
		}
	}
}


export class AliasedProcedureResultContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureOutput(): ProcedureOutputContext {
		return this.getTypedRuleContext(ProcedureOutputContext, 0) as ProcedureOutputContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_aliasedProcedureResult;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAliasedProcedureResult) {
	 		listener.enterAliasedProcedureResult(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAliasedProcedureResult) {
	 		listener.exitAliasedProcedureResult(this);
		}
	}
}


export class SimpleProcedureResultContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureOutput(): ProcedureOutputContext {
		return this.getTypedRuleContext(ProcedureOutputContext, 0) as ProcedureOutputContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_simpleProcedureResult;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSimpleProcedureResult) {
	 		listener.enterSimpleProcedureResult(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSimpleProcedureResult) {
	 		listener.exitSimpleProcedureResult(this);
		}
	}
}


export class ProcedureOutputContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureOutput;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureOutput) {
	 		listener.enterProcedureOutput(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureOutput) {
	 		listener.exitProcedureOutput(this);
		}
	}
}


export class OrderContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(CypherParser.ORDER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public BY(): TerminalNode {
		return this.getToken(CypherParser.BY, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_order;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrder) {
	 		listener.enterOrder(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrder) {
	 		listener.exitOrder(this);
		}
	}
}


export class SkipContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_SKIP(): TerminalNode {
		return this.getToken(CypherParser.L_SKIP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_skip;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSkip) {
	 		listener.enterSkip(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSkip) {
	 		listener.exitSkip(this);
		}
	}
}


export class LimitContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(CypherParser.LIMIT, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_limit;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLimit) {
	 		listener.enterLimit(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLimit) {
	 		listener.exitLimit(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ASCENDING(): TerminalNode {
		return this.getToken(CypherParser.ASCENDING, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(CypherParser.ASC, 0);
	}
	public DESCENDING(): TerminalNode {
		return this.getToken(CypherParser.DESCENDING, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(CypherParser.DESC, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_sortItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public USING(): TerminalNode {
		return this.getToken(CypherParser.USING, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public variable_list(): VariableContext[] {
		return this.getTypedRuleContexts(VariableContext) as VariableContext[];
	}
	public variable(i: number): VariableContext {
		return this.getTypedRuleContext(VariableContext, i) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public propertyKeys(): PropertyKeysContext {
		return this.getTypedRuleContext(PropertyKeysContext, 0) as PropertyKeysContext;
	}
	public JOIN(): TerminalNode {
		return this.getToken(CypherParser.JOIN, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public SCAN(): TerminalNode {
		return this.getToken(CypherParser.SCAN, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_hint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHint) {
	 		listener.enterHint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHint) {
	 		listener.exitHint(this);
		}
	}
}


export class StartClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public startPoint_list(): StartPointContext[] {
		return this.getTypedRuleContexts(StartPointContext) as StartPointContext[];
	}
	public startPoint(i: number): StartPointContext {
		return this.getTypedRuleContext(StartPointContext, i) as StartPointContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_startClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStartClause) {
	 		listener.enterStartClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStartClause) {
	 		listener.exitStartClause(this);
		}
	}
}


export class StartPointContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public lookup(): LookupContext {
		return this.getTypedRuleContext(LookupContext, 0) as LookupContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_startPoint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStartPoint) {
	 		listener.enterStartPoint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStartPoint) {
	 		listener.exitStartPoint(this);
		}
	}
}


export class LookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodeLookup(): NodeLookupContext {
		return this.getTypedRuleContext(NodeLookupContext, 0) as NodeLookupContext;
	}
	public relationshipLookup(): RelationshipLookupContext {
		return this.getTypedRuleContext(RelationshipLookupContext, 0) as RelationshipLookupContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_lookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLookup) {
	 		listener.enterLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLookup) {
	 		listener.exitLookup(this);
		}
	}
}


export class NodeLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public identifiedIndexLookup(): IdentifiedIndexLookupContext {
		return this.getTypedRuleContext(IdentifiedIndexLookupContext, 0) as IdentifiedIndexLookupContext;
	}
	public indexQuery(): IndexQueryContext {
		return this.getTypedRuleContext(IndexQueryContext, 0) as IndexQueryContext;
	}
	public idLookup(): IdLookupContext {
		return this.getTypedRuleContext(IdLookupContext, 0) as IdLookupContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeLookup) {
	 		listener.enterNodeLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeLookup) {
	 		listener.exitNodeLookup(this);
		}
	}
}


export class RelationshipLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public REL(): TerminalNode {
		return this.getToken(CypherParser.REL, 0);
	}
	public identifiedIndexLookup(): IdentifiedIndexLookupContext {
		return this.getTypedRuleContext(IdentifiedIndexLookupContext, 0) as IdentifiedIndexLookupContext;
	}
	public indexQuery(): IndexQueryContext {
		return this.getTypedRuleContext(IndexQueryContext, 0) as IndexQueryContext;
	}
	public idLookup(): IdLookupContext {
		return this.getTypedRuleContext(IdLookupContext, 0) as IdLookupContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipLookup) {
	 		listener.enterRelationshipLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipLookup) {
	 		listener.exitRelationshipLookup(this);
		}
	}
}


export class IdentifiedIndexLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_identifiedIndexLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIdentifiedIndexLookup) {
	 		listener.enterIdentifiedIndexLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIdentifiedIndexLookup) {
	 		listener.exitIdentifiedIndexLookup(this);
		}
	}
}


export class IndexQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_indexQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIndexQuery) {
	 		listener.enterIndexQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIndexQuery) {
	 		listener.exitIndexQuery(this);
		}
	}
}


export class IdLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literalIds(): LiteralIdsContext {
		return this.getTypedRuleContext(LiteralIdsContext, 0) as LiteralIdsContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_idLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIdLookup) {
	 		listener.enterIdLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIdLookup) {
	 		listener.exitIdLookup(this);
		}
	}
}


export class LiteralIdsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerLiteral_list(): IntegerLiteralContext[] {
		return this.getTypedRuleContexts(IntegerLiteralContext) as IntegerLiteralContext[];
	}
	public integerLiteral(i: number): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, i) as IntegerLiteralContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_literalIds;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLiteralIds) {
	 		listener.enterLiteralIds(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLiteralIds) {
	 		listener.exitLiteralIds(this);
		}
	}
}


export class WhereContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_where;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterWhere) {
	 		listener.enterWhere(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitWhere) {
	 		listener.exitWhere(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternPart_list(): PatternPartContext[] {
		return this.getTypedRuleContexts(PatternPartContext) as PatternPartContext[];
	}
	public patternPart(i: number): PatternPartContext {
		return this.getTypedRuleContext(PatternPartContext, i) as PatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_pattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPattern) {
	 		listener.enterPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPattern) {
	 		listener.exitPattern(this);
		}
	}
}


export class PatternPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public anonymousPatternPart(): AnonymousPatternPartContext {
		return this.getTypedRuleContext(AnonymousPatternPartContext, 0) as AnonymousPatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternPart) {
	 		listener.enterPatternPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternPart) {
	 		listener.exitPatternPart(this);
		}
	}
}


export class AnonymousPatternPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shortestPathPatternFunction(): ShortestPathPatternFunctionContext {
		return this.getTypedRuleContext(ShortestPathPatternFunctionContext, 0) as ShortestPathPatternFunctionContext;
	}
	public patternElement(): PatternElementContext {
		return this.getTypedRuleContext(PatternElementContext, 0) as PatternElementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anonymousPatternPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnonymousPatternPart) {
	 		listener.enterAnonymousPatternPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnonymousPatternPart) {
	 		listener.exitAnonymousPatternPart(this);
		}
	}
}


export class PatternElementContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodePattern(): NodePatternContext {
		return this.getTypedRuleContext(NodePatternContext, 0) as NodePatternContext;
	}
	public patternElementChain_list(): PatternElementChainContext[] {
		return this.getTypedRuleContexts(PatternElementChainContext) as PatternElementChainContext[];
	}
	public patternElementChain(i: number): PatternElementChainContext {
		return this.getTypedRuleContext(PatternElementChainContext, i) as PatternElementChainContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public patternElement(): PatternElementContext {
		return this.getTypedRuleContext(PatternElementContext, 0) as PatternElementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternElement;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternElement) {
	 		listener.enterPatternElement(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternElement) {
	 		listener.exitPatternElement(this);
		}
	}
}


export class NodePatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabels(): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, 0) as NodeLabelsContext;
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodePattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodePattern) {
	 		listener.enterNodePattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodePattern) {
	 		listener.exitNodePattern(this);
		}
	}
}


export class PatternElementChainContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipPattern(): RelationshipPatternContext {
		return this.getTypedRuleContext(RelationshipPatternContext, 0) as RelationshipPatternContext;
	}
	public nodePattern(): NodePatternContext {
		return this.getTypedRuleContext(NodePatternContext, 0) as NodePatternContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternElementChain;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternElementChain) {
	 		listener.enterPatternElementChain(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternElementChain) {
	 		listener.exitPatternElementChain(this);
		}
	}
}


export class RelationshipPatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipPatternStart(): RelationshipPatternStartContext {
		return this.getTypedRuleContext(RelationshipPatternStartContext, 0) as RelationshipPatternStartContext;
	}
	public relationshipPatternEnd(): RelationshipPatternEndContext {
		return this.getTypedRuleContext(RelationshipPatternEndContext, 0) as RelationshipPatternEndContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public relationshipDetail(): RelationshipDetailContext {
		return this.getTypedRuleContext(RelationshipDetailContext, 0) as RelationshipDetailContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPattern) {
	 		listener.enterRelationshipPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPattern) {
	 		listener.exitRelationshipPattern(this);
		}
	}
}


export class RelationshipPatternStartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public leftArrowHead(): LeftArrowHeadContext {
		return this.getTypedRuleContext(LeftArrowHeadContext, 0) as LeftArrowHeadContext;
	}
	public dash(): DashContext {
		return this.getTypedRuleContext(DashContext, 0) as DashContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPatternStart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPatternStart) {
	 		listener.enterRelationshipPatternStart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPatternStart) {
	 		listener.exitRelationshipPatternStart(this);
		}
	}
}


export class RelationshipPatternEndContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dash(): DashContext {
		return this.getTypedRuleContext(DashContext, 0) as DashContext;
	}
	public rightArrowHead(): RightArrowHeadContext {
		return this.getTypedRuleContext(RightArrowHeadContext, 0) as RightArrowHeadContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPatternEnd;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPatternEnd) {
	 		listener.enterRelationshipPatternEnd(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPatternEnd) {
	 		listener.exitRelationshipPatternEnd(this);
		}
	}
}


export class RelationshipDetailContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public relationshipTypes(): RelationshipTypesContext {
		return this.getTypedRuleContext(RelationshipTypesContext, 0) as RelationshipTypesContext;
	}
	public rangeLiteral(): RangeLiteralContext {
		return this.getTypedRuleContext(RangeLiteralContext, 0) as RangeLiteralContext;
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipDetail;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipDetail) {
	 		listener.enterRelationshipDetail(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipDetail) {
	 		listener.exitRelationshipDetail(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mapLiteral(): MapLiteralContext {
		return this.getTypedRuleContext(MapLiteralContext, 0) as MapLiteralContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_properties;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProperties) {
	 		listener.enterProperties(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProperties) {
	 		listener.exitProperties(this);
		}
	}
}


export class RelTypeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relType;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelType) {
	 		listener.enterRelType(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelType) {
	 		listener.exitRelType(this);
		}
	}
}


export class RelationshipTypeTermAtomContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parenthesizedRelationshipTypeTerm(): ParenthesizedRelationshipTypeTermContext {
		return this.getTypedRuleContext(ParenthesizedRelationshipTypeTermContext, 0) as ParenthesizedRelationshipTypeTermContext;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipTypeTermAtom;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipTypeTermAtom) {
	 		listener.enterRelationshipTypeTermAtom(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipTypeTermAtom) {
	 		listener.exitRelationshipTypeTermAtom(this);
		}
	}
}


export class RelationshipTypeTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
	public orRelationshipTypeTerm(): OrRelationshipTypeTermContext {
		return this.getTypedRuleContext(OrRelationshipTypeTermContext, 0) as OrRelationshipTypeTermContext;
	}
	public wildcardRelationshipType(): WildcardRelationshipTypeContext {
		return this.getTypedRuleContext(WildcardRelationshipTypeContext, 0) as WildcardRelationshipTypeContext;
	}
	public parenthesizedRelationshipTypeTerm(): ParenthesizedRelationshipTypeTermContext {
		return this.getTypedRuleContext(ParenthesizedRelationshipTypeTermContext, 0) as ParenthesizedRelationshipTypeTermContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipTypeTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipTypeTerm) {
	 		listener.enterRelationshipTypeTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipTypeTerm) {
	 		listener.exitRelationshipTypeTerm(this);
		}
	}
}


export class WildcardRelationshipTypeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_wildcardRelationshipType;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterWildcardRelationshipType) {
	 		listener.enterWildcardRelationshipType(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitWildcardRelationshipType) {
	 		listener.exitWildcardRelationshipType(this);
		}
	}
}


export class OrRelationshipTypeTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andRelationshipTypeTerm_list(): AndRelationshipTypeTermContext[] {
		return this.getTypedRuleContexts(AndRelationshipTypeTermContext) as AndRelationshipTypeTermContext[];
	}
	public andRelationshipTypeTerm(i: number): AndRelationshipTypeTermContext {
		return this.getTypedRuleContext(AndRelationshipTypeTermContext, i) as AndRelationshipTypeTermContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_orRelationshipTypeTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrRelationshipTypeTerm) {
	 		listener.enterOrRelationshipTypeTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrRelationshipTypeTerm) {
	 		listener.exitOrRelationshipTypeTerm(this);
		}
	}
}


export class AndRelationshipTypeTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public notRelationshipTypeTerm_list(): NotRelationshipTypeTermContext[] {
		return this.getTypedRuleContexts(NotRelationshipTypeTermContext) as NotRelationshipTypeTermContext[];
	}
	public notRelationshipTypeTerm(i: number): NotRelationshipTypeTermContext {
		return this.getTypedRuleContext(NotRelationshipTypeTermContext, i) as NotRelationshipTypeTermContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_andRelationshipTypeTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAndRelationshipTypeTerm) {
	 		listener.enterAndRelationshipTypeTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAndRelationshipTypeTerm) {
	 		listener.exitAndRelationshipTypeTerm(this);
		}
	}
}


export class NotRelationshipTypeTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipTypeTermAtom(): RelationshipTypeTermAtomContext {
		return this.getTypedRuleContext(RelationshipTypeTermAtomContext, 0) as RelationshipTypeTermAtomContext;
	}
	public inversionToken_list(): InversionTokenContext[] {
		return this.getTypedRuleContexts(InversionTokenContext) as InversionTokenContext[];
	}
	public inversionToken(i: number): InversionTokenContext {
		return this.getTypedRuleContext(InversionTokenContext, i) as InversionTokenContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_notRelationshipTypeTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNotRelationshipTypeTerm) {
	 		listener.enterNotRelationshipTypeTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNotRelationshipTypeTerm) {
	 		listener.exitNotRelationshipTypeTerm(this);
		}
	}
}


export class ParenthesizedRelationshipTypeTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipTypeTerm(): RelationshipTypeTermContext {
		return this.getTypedRuleContext(RelationshipTypeTermContext, 0) as RelationshipTypeTermContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parenthesizedRelationshipTypeTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParenthesizedRelationshipTypeTerm) {
	 		listener.enterParenthesizedRelationshipTypeTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParenthesizedRelationshipTypeTerm) {
	 		listener.exitParenthesizedRelationshipTypeTerm(this);
		}
	}
}


export class RelationshipTypesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipType(): RelationshipTypeContext {
		return this.getTypedRuleContext(RelationshipTypeContext, 0) as RelationshipTypeContext;
	}
	public relationshipTypeOptionalColon_list(): RelationshipTypeOptionalColonContext[] {
		return this.getTypedRuleContexts(RelationshipTypeOptionalColonContext) as RelationshipTypeOptionalColonContext[];
	}
	public relationshipTypeOptionalColon(i: number): RelationshipTypeOptionalColonContext {
		return this.getTypedRuleContext(RelationshipTypeOptionalColonContext, i) as RelationshipTypeOptionalColonContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipTypes;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipTypes) {
	 		listener.enterRelationshipTypes(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipTypes) {
	 		listener.exitRelationshipTypes(this);
		}
	}
}


export class RelationshipTypeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipTypeTerm(): RelationshipTypeTermContext {
		return this.getTypedRuleContext(RelationshipTypeTermContext, 0) as RelationshipTypeTermContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipType;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipType) {
	 		listener.enterRelationshipType(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipType) {
	 		listener.exitRelationshipType(this);
		}
	}
}


export class InversionTokenContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_inversionToken;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterInversionToken) {
	 		listener.enterInversionToken(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitInversionToken) {
	 		listener.exitInversionToken(this);
		}
	}
}


export class RelationshipTypeOptionalColonContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipTypeOptionalColon;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipTypeOptionalColon) {
	 		listener.enterRelationshipTypeOptionalColon(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipTypeOptionalColon) {
	 		listener.exitRelationshipTypeOptionalColon(this);
		}
	}
}


export class NodeLabelsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodeLabel_list(): NodeLabelContext[] {
		return this.getTypedRuleContexts(NodeLabelContext) as NodeLabelContext[];
	}
	public nodeLabel(i: number): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, i) as NodeLabelContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeLabels;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeLabels) {
	 		listener.enterNodeLabels(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeLabels) {
	 		listener.exitNodeLabels(this);
		}
	}
}


export class NodeLabelContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labelTerm(): LabelTermContext {
		return this.getTypedRuleContext(LabelTermContext, 0) as LabelTermContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeLabel;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeLabel) {
	 		listener.enterNodeLabel(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeLabel) {
	 		listener.exitNodeLabel(this);
		}
	}
}


export class LabelAtomContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parenthesizedLabelTerm(): ParenthesizedLabelTermContext {
		return this.getTypedRuleContext(ParenthesizedLabelTermContext, 0) as ParenthesizedLabelTermContext;
	}
	public labelName(): LabelNameContext {
		return this.getTypedRuleContext(LabelNameContext, 0) as LabelNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_labelAtom;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLabelAtom) {
	 		listener.enterLabelAtom(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLabelAtom) {
	 		listener.exitLabelAtom(this);
		}
	}
}


export class LabelTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labelName(): LabelNameContext {
		return this.getTypedRuleContext(LabelNameContext, 0) as LabelNameContext;
	}
	public orLabelTerm(): OrLabelTermContext {
		return this.getTypedRuleContext(OrLabelTermContext, 0) as OrLabelTermContext;
	}
	public wildcardLabel(): WildcardLabelContext {
		return this.getTypedRuleContext(WildcardLabelContext, 0) as WildcardLabelContext;
	}
	public parenthesizedLabelTerm(): ParenthesizedLabelTermContext {
		return this.getTypedRuleContext(ParenthesizedLabelTermContext, 0) as ParenthesizedLabelTermContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_labelTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLabelTerm) {
	 		listener.enterLabelTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLabelTerm) {
	 		listener.exitLabelTerm(this);
		}
	}
}


export class WildcardLabelContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_wildcardLabel;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterWildcardLabel) {
	 		listener.enterWildcardLabel(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitWildcardLabel) {
	 		listener.exitWildcardLabel(this);
		}
	}
}


export class OrLabelTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andLabelTerm_list(): AndLabelTermContext[] {
		return this.getTypedRuleContexts(AndLabelTermContext) as AndLabelTermContext[];
	}
	public andLabelTerm(i: number): AndLabelTermContext {
		return this.getTypedRuleContext(AndLabelTermContext, i) as AndLabelTermContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_orLabelTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrLabelTerm) {
	 		listener.enterOrLabelTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrLabelTerm) {
	 		listener.exitOrLabelTerm(this);
		}
	}
}


export class AndLabelTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public notLabelTerm_list(): NotLabelTermContext[] {
		return this.getTypedRuleContexts(NotLabelTermContext) as NotLabelTermContext[];
	}
	public notLabelTerm(i: number): NotLabelTermContext {
		return this.getTypedRuleContext(NotLabelTermContext, i) as NotLabelTermContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_andLabelTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAndLabelTerm) {
	 		listener.enterAndLabelTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAndLabelTerm) {
	 		listener.exitAndLabelTerm(this);
		}
	}
}


export class NotLabelTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labelAtom(): LabelAtomContext {
		return this.getTypedRuleContext(LabelAtomContext, 0) as LabelAtomContext;
	}
	public inversionToken_list(): InversionTokenContext[] {
		return this.getTypedRuleContexts(InversionTokenContext) as InversionTokenContext[];
	}
	public inversionToken(i: number): InversionTokenContext {
		return this.getTypedRuleContext(InversionTokenContext, i) as InversionTokenContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_notLabelTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNotLabelTerm) {
	 		listener.enterNotLabelTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNotLabelTerm) {
	 		listener.exitNotLabelTerm(this);
		}
	}
}


export class ParenthesizedLabelTermContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labelTerm(): LabelTermContext {
		return this.getTypedRuleContext(LabelTermContext, 0) as LabelTermContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parenthesizedLabelTerm;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParenthesizedLabelTerm) {
	 		listener.enterParenthesizedLabelTerm(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParenthesizedLabelTerm) {
	 		listener.exitParenthesizedLabelTerm(this);
		}
	}
}


export class RangeLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public integerLiteral_list(): IntegerLiteralContext[] {
		return this.getTypedRuleContexts(IntegerLiteralContext) as IntegerLiteralContext[];
	}
	public integerLiteral(i: number): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, i) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_rangeLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRangeLiteral) {
	 		listener.enterRangeLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRangeLiteral) {
	 		listener.exitRangeLiteral(this);
		}
	}
}


export class LabelNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_labelName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLabelName) {
	 		listener.enterLabelName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLabelName) {
	 		listener.exitLabelName(this);
		}
	}
}


export class RelTypeNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relTypeName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelTypeName) {
	 		listener.enterRelTypeName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelTypeName) {
	 		listener.exitRelTypeName(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_expression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class ExistsSubQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public existsSubQueryBody(): ExistsSubQueryBodyContext {
		return this.getTypedRuleContext(ExistsSubQueryBodyContext, 0) as ExistsSubQueryBodyContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_existsSubQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExistsSubQuery) {
	 		listener.enterExistsSubQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExistsSubQuery) {
	 		listener.exitExistsSubQuery(this);
		}
	}
}


export class ExistsSubQueryBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
	public subqueryPatternBody(): SubqueryPatternBodyContext {
		return this.getTypedRuleContext(SubqueryPatternBodyContext, 0) as SubqueryPatternBodyContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_existsSubQueryBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExistsSubQueryBody) {
	 		listener.enterExistsSubQueryBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExistsSubQueryBody) {
	 		listener.exitExistsSubQueryBody(this);
		}
	}
}


export class SubqueryPatternBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public hint_list(): HintContext[] {
		return this.getTypedRuleContexts(HintContext) as HintContext[];
	}
	public hint(i: number): HintContext {
		return this.getTypedRuleContext(HintContext, i) as HintContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_subqueryPatternBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSubqueryPatternBody) {
	 		listener.enterSubqueryPatternBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSubqueryPatternBody) {
	 		listener.exitSubqueryPatternBody(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public xorExpression_list(): XorExpressionContext[] {
		return this.getTypedRuleContexts(XorExpressionContext) as XorExpressionContext[];
	}
	public xorExpression(i: number): XorExpressionContext {
		return this.getTypedRuleContext(XorExpressionContext, i) as XorExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(CypherParser.OR, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_orExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrExpression) {
	 		listener.enterOrExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrExpression) {
	 		listener.exitOrExpression(this);
		}
	}
}


export class XorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andExpression_list(): AndExpressionContext[] {
		return this.getTypedRuleContexts(AndExpressionContext) as AndExpressionContext[];
	}
	public andExpression(i: number): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, i) as AndExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public XOR_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.XOR);
	}
	public XOR(i: number): TerminalNode {
		return this.getToken(CypherParser.XOR, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_xorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterXorExpression) {
	 		listener.enterXorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitXorExpression) {
	 		listener.exitXorExpression(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public notExpression_list(): NotExpressionContext[] {
		return this.getTypedRuleContexts(NotExpressionContext) as NotExpressionContext[];
	}
	public notExpression(i: number): NotExpressionContext {
		return this.getTypedRuleContext(NotExpressionContext, i) as NotExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(CypherParser.AND, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_andExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
}


export class NotExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(CypherParser.NOT, i);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_notExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNotExpression) {
	 		listener.enterNotExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNotExpression) {
	 		listener.exitNotExpression(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addOrSubtractExpression(): AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(AddOrSubtractExpressionContext, 0) as AddOrSubtractExpressionContext;
	}
	public partialComparisonExpression_list(): PartialComparisonExpressionContext[] {
		return this.getTypedRuleContexts(PartialComparisonExpressionContext) as PartialComparisonExpressionContext[];
	}
	public partialComparisonExpression(i: number): PartialComparisonExpressionContext {
		return this.getTypedRuleContext(PartialComparisonExpressionContext, i) as PartialComparisonExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_comparisonExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterComparisonExpression) {
	 		listener.enterComparisonExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitComparisonExpression) {
	 		listener.exitComparisonExpression(this);
		}
	}
}


export class AddOrSubtractExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplyDivideModuloExpression_list(): MultiplyDivideModuloExpressionContext[] {
		return this.getTypedRuleContexts(MultiplyDivideModuloExpressionContext) as MultiplyDivideModuloExpressionContext[];
	}
	public multiplyDivideModuloExpression(i: number): MultiplyDivideModuloExpressionContext {
		return this.getTypedRuleContext(MultiplyDivideModuloExpressionContext, i) as MultiplyDivideModuloExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_addOrSubtractExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAddOrSubtractExpression) {
	 		listener.enterAddOrSubtractExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAddOrSubtractExpression) {
	 		listener.exitAddOrSubtractExpression(this);
		}
	}
}


export class MultiplyDivideModuloExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public powerOfExpression_list(): PowerOfExpressionContext[] {
		return this.getTypedRuleContexts(PowerOfExpressionContext) as PowerOfExpressionContext[];
	}
	public powerOfExpression(i: number): PowerOfExpressionContext {
		return this.getTypedRuleContext(PowerOfExpressionContext, i) as PowerOfExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_multiplyDivideModuloExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMultiplyDivideModuloExpression) {
	 		listener.enterMultiplyDivideModuloExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMultiplyDivideModuloExpression) {
	 		listener.exitMultiplyDivideModuloExpression(this);
		}
	}
}


export class PowerOfExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryAddOrSubtractExpression_list(): UnaryAddOrSubtractExpressionContext[] {
		return this.getTypedRuleContexts(UnaryAddOrSubtractExpressionContext) as UnaryAddOrSubtractExpressionContext[];
	}
	public unaryAddOrSubtractExpression(i: number): UnaryAddOrSubtractExpressionContext {
		return this.getTypedRuleContext(UnaryAddOrSubtractExpressionContext, i) as UnaryAddOrSubtractExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_powerOfExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPowerOfExpression) {
	 		listener.enterPowerOfExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPowerOfExpression) {
	 		listener.exitPowerOfExpression(this);
		}
	}
}


export class UnaryAddOrSubtractExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringListNullOperatorExpression(): StringListNullOperatorExpressionContext {
		return this.getTypedRuleContext(StringListNullOperatorExpressionContext, 0) as StringListNullOperatorExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_unaryAddOrSubtractExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUnaryAddOrSubtractExpression) {
	 		listener.enterUnaryAddOrSubtractExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUnaryAddOrSubtractExpression) {
	 		listener.exitUnaryAddOrSubtractExpression(this);
		}
	}
}


export class StringListNullOperatorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyOrLabelsExpression_list(): PropertyOrLabelsExpressionContext[] {
		return this.getTypedRuleContexts(PropertyOrLabelsExpressionContext) as PropertyOrLabelsExpressionContext[];
	}
	public propertyOrLabelsExpression(i: number): PropertyOrLabelsExpressionContext {
		return this.getTypedRuleContext(PropertyOrLabelsExpressionContext, i) as PropertyOrLabelsExpressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.IS);
	}
	public IS(i: number): TerminalNode {
		return this.getToken(CypherParser.IS, i);
	}
	public NULL_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NULL);
	}
	public NULL(i: number): TerminalNode {
		return this.getToken(CypherParser.NULL, i);
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(CypherParser.NOT, i);
	}
	public IN_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.IN);
	}
	public IN(i: number): TerminalNode {
		return this.getToken(CypherParser.IN, i);
	}
	public STARTS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.STARTS);
	}
	public STARTS(i: number): TerminalNode {
		return this.getToken(CypherParser.STARTS, i);
	}
	public WITH_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.WITH);
	}
	public WITH(i: number): TerminalNode {
		return this.getToken(CypherParser.WITH, i);
	}
	public ENDS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.ENDS);
	}
	public ENDS(i: number): TerminalNode {
		return this.getToken(CypherParser.ENDS, i);
	}
	public CONTAINS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.CONTAINS);
	}
	public CONTAINS(i: number): TerminalNode {
		return this.getToken(CypherParser.CONTAINS, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_stringListNullOperatorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStringListNullOperatorExpression) {
	 		listener.enterStringListNullOperatorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStringListNullOperatorExpression) {
	 		listener.exitStringListNullOperatorExpression(this);
		}
	}
}


export class PropertyOrLabelsExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public propertyLookup_list(): PropertyLookupContext[] {
		return this.getTypedRuleContexts(PropertyLookupContext) as PropertyLookupContext[];
	}
	public propertyLookup(i: number): PropertyLookupContext {
		return this.getTypedRuleContext(PropertyLookupContext, i) as PropertyLookupContext;
	}
	public nodeLabels_list(): NodeLabelsContext[] {
		return this.getTypedRuleContexts(NodeLabelsContext) as NodeLabelsContext[];
	}
	public nodeLabels(i: number): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, i) as NodeLabelsContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyOrLabelsExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyOrLabelsExpression) {
	 		listener.enterPropertyOrLabelsExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyOrLabelsExpression) {
	 		listener.exitPropertyOrLabelsExpression(this);
		}
	}
}


export class FilterFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public filterFunctionName(): FilterFunctionNameContext {
		return this.getTypedRuleContext(FilterFunctionNameContext, 0) as FilterFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_filterFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFilterFunction) {
	 		listener.enterFilterFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFilterFunction) {
	 		listener.exitFilterFunction(this);
		}
	}
}


export class FilterFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER(): TerminalNode {
		return this.getToken(CypherParser.FILTER, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_filterFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFilterFunctionName) {
	 		listener.enterFilterFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFilterFunctionName) {
	 		listener.exitFilterFunctionName(this);
		}
	}
}


export class ExistsFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public existsFunctionName(): ExistsFunctionNameContext {
		return this.getTypedRuleContext(ExistsFunctionNameContext, 0) as ExistsFunctionNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_existsFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExistsFunction) {
	 		listener.enterExistsFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExistsFunction) {
	 		listener.exitExistsFunction(this);
		}
	}
}


export class ExistsFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_existsFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExistsFunctionName) {
	 		listener.enterExistsFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExistsFunctionName) {
	 		listener.exitExistsFunctionName(this);
		}
	}
}


export class AllFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public allFunctionName(): AllFunctionNameContext {
		return this.getTypedRuleContext(AllFunctionNameContext, 0) as AllFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllFunction) {
	 		listener.enterAllFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllFunction) {
	 		listener.exitAllFunction(this);
		}
	}
}


export class AllFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllFunctionName) {
	 		listener.enterAllFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllFunctionName) {
	 		listener.exitAllFunctionName(this);
		}
	}
}


export class AnyFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public anyFunctionName(): AnyFunctionNameContext {
		return this.getTypedRuleContext(AnyFunctionNameContext, 0) as AnyFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anyFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnyFunction) {
	 		listener.enterAnyFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnyFunction) {
	 		listener.exitAnyFunction(this);
		}
	}
}


export class AnyFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANY(): TerminalNode {
		return this.getToken(CypherParser.ANY, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anyFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnyFunctionName) {
	 		listener.enterAnyFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnyFunctionName) {
	 		listener.exitAnyFunctionName(this);
		}
	}
}


export class NoneFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public noneFunctionName(): NoneFunctionNameContext {
		return this.getTypedRuleContext(NoneFunctionNameContext, 0) as NoneFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_noneFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNoneFunction) {
	 		listener.enterNoneFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNoneFunction) {
	 		listener.exitNoneFunction(this);
		}
	}
}


export class NoneFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NONE(): TerminalNode {
		return this.getToken(CypherParser.NONE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_noneFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNoneFunctionName) {
	 		listener.enterNoneFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNoneFunctionName) {
	 		listener.exitNoneFunctionName(this);
		}
	}
}


export class SingleFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleFunctionName(): SingleFunctionNameContext {
		return this.getTypedRuleContext(SingleFunctionNameContext, 0) as SingleFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_singleFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSingleFunction) {
	 		listener.enterSingleFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSingleFunction) {
	 		listener.exitSingleFunction(this);
		}
	}
}


export class SingleFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLE(): TerminalNode {
		return this.getToken(CypherParser.SINGLE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_singleFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSingleFunctionName) {
	 		listener.enterSingleFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSingleFunctionName) {
	 		listener.exitSingleFunctionName(this);
		}
	}
}


export class ExtractFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extractFunctionName(): ExtractFunctionNameContext {
		return this.getTypedRuleContext(ExtractFunctionNameContext, 0) as ExtractFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_extractFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExtractFunction) {
	 		listener.enterExtractFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExtractFunction) {
	 		listener.exitExtractFunction(this);
		}
	}
}


export class ExtractFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(CypherParser.EXTRACT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_extractFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExtractFunctionName) {
	 		listener.enterExtractFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExtractFunctionName) {
	 		listener.exitExtractFunctionName(this);
		}
	}
}


export class ReduceFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceFunctionName(): ReduceFunctionNameContext {
		return this.getTypedRuleContext(ReduceFunctionNameContext, 0) as ReduceFunctionNameContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public idInColl(): IdInCollContext {
		return this.getTypedRuleContext(IdInCollContext, 0) as IdInCollContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_reduceFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReduceFunction) {
	 		listener.enterReduceFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReduceFunction) {
	 		listener.exitReduceFunction(this);
		}
	}
}


export class ReduceFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REDUCE(): TerminalNode {
		return this.getToken(CypherParser.REDUCE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_reduceFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReduceFunctionName) {
	 		listener.enterReduceFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReduceFunctionName) {
	 		listener.exitReduceFunctionName(this);
		}
	}
}


export class ShortestPathPatternFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shortestPathFunctionName(): ShortestPathFunctionNameContext {
		return this.getTypedRuleContext(ShortestPathFunctionNameContext, 0) as ShortestPathFunctionNameContext;
	}
	public patternElement(): PatternElementContext {
		return this.getTypedRuleContext(PatternElementContext, 0) as PatternElementContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public allShortestPathFunctionName(): AllShortestPathFunctionNameContext {
		return this.getTypedRuleContext(AllShortestPathFunctionNameContext, 0) as AllShortestPathFunctionNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_shortestPathPatternFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShortestPathPatternFunction) {
	 		listener.enterShortestPathPatternFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShortestPathPatternFunction) {
	 		listener.exitShortestPathPatternFunction(this);
		}
	}
}


export class ShortestPathFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHORTESTPATH(): TerminalNode {
		return this.getToken(CypherParser.SHORTESTPATH, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_shortestPathFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShortestPathFunctionName) {
	 		listener.enterShortestPathFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShortestPathFunctionName) {
	 		listener.exitShortestPathFunctionName(this);
		}
	}
}


export class AllShortestPathFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALLSHORTESTPATHS(): TerminalNode {
		return this.getToken(CypherParser.ALLSHORTESTPATHS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allShortestPathFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllShortestPathFunctionName) {
	 		listener.enterAllShortestPathFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllShortestPathFunctionName) {
	 		listener.exitAllShortestPathFunctionName(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public caseExpression(): CaseExpressionContext {
		return this.getTypedRuleContext(CaseExpressionContext, 0) as CaseExpressionContext;
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public listComprehension(): ListComprehensionContext {
		return this.getTypedRuleContext(ListComprehensionContext, 0) as ListComprehensionContext;
	}
	public patternComprehension(): PatternComprehensionContext {
		return this.getTypedRuleContext(PatternComprehensionContext, 0) as PatternComprehensionContext;
	}
	public filterFunction(): FilterFunctionContext {
		return this.getTypedRuleContext(FilterFunctionContext, 0) as FilterFunctionContext;
	}
	public extractFunction(): ExtractFunctionContext {
		return this.getTypedRuleContext(ExtractFunctionContext, 0) as ExtractFunctionContext;
	}
	public reduceFunction(): ReduceFunctionContext {
		return this.getTypedRuleContext(ReduceFunctionContext, 0) as ReduceFunctionContext;
	}
	public allFunction(): AllFunctionContext {
		return this.getTypedRuleContext(AllFunctionContext, 0) as AllFunctionContext;
	}
	public anyFunction(): AnyFunctionContext {
		return this.getTypedRuleContext(AnyFunctionContext, 0) as AnyFunctionContext;
	}
	public noneFunction(): NoneFunctionContext {
		return this.getTypedRuleContext(NoneFunctionContext, 0) as NoneFunctionContext;
	}
	public singleFunction(): SingleFunctionContext {
		return this.getTypedRuleContext(SingleFunctionContext, 0) as SingleFunctionContext;
	}
	public existsFunction(): ExistsFunctionContext {
		return this.getTypedRuleContext(ExistsFunctionContext, 0) as ExistsFunctionContext;
	}
	public shortestPathPatternFunction(): ShortestPathPatternFunctionContext {
		return this.getTypedRuleContext(ShortestPathPatternFunctionContext, 0) as ShortestPathPatternFunctionContext;
	}
	public relationshipsPattern(): RelationshipsPatternContext {
		return this.getTypedRuleContext(RelationshipsPatternContext, 0) as RelationshipsPatternContext;
	}
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		return this.getTypedRuleContext(ParenthesizedExpressionContext, 0) as ParenthesizedExpressionContext;
	}
	public functionInvocation(): FunctionInvocationContext {
		return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext;
	}
	public existsSubQuery(): ExistsSubQueryContext {
		return this.getTypedRuleContext(ExistsSubQueryContext, 0) as ExistsSubQueryContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_atom;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public mapLiteral(): MapLiteralContext {
		return this.getTypedRuleContext(MapLiteralContext, 0) as MapLiteralContext;
	}
	public listLiteral(): ListLiteralContext {
		return this.getTypedRuleContext(ListLiteralContext, 0) as ListLiteralContext;
	}
	public mapProjection(): MapProjectionContext {
		return this.getTypedRuleContext(MapProjectionContext, 0) as MapProjectionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_literal;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_stringLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(CypherParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CypherParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_booleanLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}


export class ListLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_listLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterListLiteral) {
	 		listener.enterListLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitListLiteral) {
	 		listener.exitListLiteral(this);
		}
	}
}


export class PartialComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addOrSubtractExpression(): AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(AddOrSubtractExpressionContext, 0) as AddOrSubtractExpressionContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_partialComparisonExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPartialComparisonExpression) {
	 		listener.enterPartialComparisonExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPartialComparisonExpression) {
	 		listener.exitPartialComparisonExpression(this);
		}
	}
}


export class ParenthesizedExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parenthesizedExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
}


export class RelationshipsPatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodePattern(): NodePatternContext {
		return this.getTypedRuleContext(NodePatternContext, 0) as NodePatternContext;
	}
	public patternElementChain_list(): PatternElementChainContext[] {
		return this.getTypedRuleContexts(PatternElementChainContext) as PatternElementChainContext[];
	}
	public patternElementChain(i: number): PatternElementChainContext {
		return this.getTypedRuleContext(PatternElementChainContext, i) as PatternElementChainContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipsPattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipsPattern) {
	 		listener.enterRelationshipsPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipsPattern) {
	 		listener.exitRelationshipsPattern(this);
		}
	}
}


export class FilterExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public idInColl(): IdInCollContext {
		return this.getTypedRuleContext(IdInCollContext, 0) as IdInCollContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_filterExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFilterExpression) {
	 		listener.enterFilterExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFilterExpression) {
	 		listener.exitFilterExpression(this);
		}
	}
}


export class IdInCollContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_idInColl;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIdInColl) {
	 		listener.enterIdInColl(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIdInColl) {
	 		listener.exitIdInColl(this);
		}
	}
}


export class FunctionInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionInvocationBody(): FunctionInvocationBodyContext {
		return this.getTypedRuleContext(FunctionInvocationBodyContext, 0) as FunctionInvocationBodyContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_functionInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunctionInvocation) {
	 		listener.enterFunctionInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunctionInvocation) {
	 		listener.exitFunctionInvocation(this);
		}
	}
}


export class FunctionInvocationBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_functionInvocationBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunctionInvocationBody) {
	 		listener.enterFunctionInvocationBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunctionInvocationBody) {
	 		listener.exitFunctionInvocationBody(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_functionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
}


export class ProcedureNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureName) {
	 		listener.enterProcedureName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureName) {
	 		listener.exitProcedureName(this);
		}
	}
}


export class ListComprehensionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_listComprehension;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterListComprehension) {
	 		listener.enterListComprehension(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitListComprehension) {
	 		listener.exitListComprehension(this);
		}
	}
}


export class PatternComprehensionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipsPattern(): RelationshipsPatternContext {
		return this.getTypedRuleContext(RelationshipsPatternContext, 0) as RelationshipsPatternContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternComprehension;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternComprehension) {
	 		listener.enterPatternComprehension(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternComprehension) {
	 		listener.exitPatternComprehension(this);
		}
	}
}


export class PropertyLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyKeyName(): PropertyKeyNameContext {
		return this.getTypedRuleContext(PropertyKeyNameContext, 0) as PropertyKeyNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyLookup) {
	 		listener.enterPropertyLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyLookup) {
	 		listener.exitPropertyLookup(this);
		}
	}
}


export class CaseExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public END(): TerminalNode {
		return this.getToken(CypherParser.END, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CypherParser.ELSE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CASE(): TerminalNode {
		return this.getToken(CypherParser.CASE, 0);
	}
	public caseAlternatives_list(): CaseAlternativesContext[] {
		return this.getTypedRuleContexts(CaseAlternativesContext) as CaseAlternativesContext[];
	}
	public caseAlternatives(i: number): CaseAlternativesContext {
		return this.getTypedRuleContext(CaseAlternativesContext, i) as CaseAlternativesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_caseExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCaseExpression) {
	 		listener.enterCaseExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCaseExpression) {
	 		listener.exitCaseExpression(this);
		}
	}
}


export class CaseAlternativesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(CypherParser.WHEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(CypherParser.THEN, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_caseAlternatives;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCaseAlternatives) {
	 		listener.enterCaseAlternatives(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCaseAlternatives) {
	 		listener.exitCaseAlternatives(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_variable;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public doubleLiteral(): DoubleLiteralContext {
		return this.getTypedRuleContext(DoubleLiteralContext, 0) as DoubleLiteralContext;
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_numberLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNumberLiteral) {
	 		listener.enterNumberLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNumberLiteral) {
	 		listener.exitNumberLiteral(this);
		}
	}
}


export class MapLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public literalEntry_list(): LiteralEntryContext[] {
		return this.getTypedRuleContexts(LiteralEntryContext) as LiteralEntryContext[];
	}
	public literalEntry(i: number): LiteralEntryContext {
		return this.getTypedRuleContext(LiteralEntryContext, i) as LiteralEntryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mapLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMapLiteral) {
	 		listener.enterMapLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMapLiteral) {
	 		listener.exitMapLiteral(this);
		}
	}
}


export class MapProjectionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public mapProjectionVariants_list(): MapProjectionVariantsContext[] {
		return this.getTypedRuleContexts(MapProjectionVariantsContext) as MapProjectionVariantsContext[];
	}
	public mapProjectionVariants(i: number): MapProjectionVariantsContext {
		return this.getTypedRuleContext(MapProjectionVariantsContext, i) as MapProjectionVariantsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mapProjection;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMapProjection) {
	 		listener.enterMapProjection(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMapProjection) {
	 		listener.exitMapProjection(this);
		}
	}
}


export class MapProjectionVariantsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literalEntry(): LiteralEntryContext {
		return this.getTypedRuleContext(LiteralEntryContext, 0) as LiteralEntryContext;
	}
	public propertySelector(): PropertySelectorContext {
		return this.getTypedRuleContext(PropertySelectorContext, 0) as PropertySelectorContext;
	}
	public variableSelector(): VariableSelectorContext {
		return this.getTypedRuleContext(VariableSelectorContext, 0) as VariableSelectorContext;
	}
	public allPropertiesSelector(): AllPropertiesSelectorContext {
		return this.getTypedRuleContext(AllPropertiesSelectorContext, 0) as AllPropertiesSelectorContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mapProjectionVariants;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMapProjectionVariants) {
	 		listener.enterMapProjectionVariants(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMapProjectionVariants) {
	 		listener.exitMapProjectionVariants(this);
		}
	}
}


export class LiteralEntryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyKeyName(): PropertyKeyNameContext {
		return this.getTypedRuleContext(PropertyKeyNameContext, 0) as PropertyKeyNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_literalEntry;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLiteralEntry) {
	 		listener.enterLiteralEntry(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLiteralEntry) {
	 		listener.exitLiteralEntry(this);
		}
	}
}


export class PropertySelectorContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertySelector;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertySelector) {
	 		listener.enterPropertySelector(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertySelector) {
	 		listener.exitPropertySelector(this);
		}
	}
}


export class VariableSelectorContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_variableSelector;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterVariableSelector) {
	 		listener.enterVariableSelector(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitVariableSelector) {
	 		listener.exitVariableSelector(this);
		}
	}
}


export class AllPropertiesSelectorContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allPropertiesSelector;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllPropertiesSelector) {
	 		listener.enterAllPropertiesSelector(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllPropertiesSelector) {
	 		listener.exitAllPropertiesSelector(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public legacyParameter(): LegacyParameterContext {
		return this.getTypedRuleContext(LegacyParameterContext, 0) as LegacyParameterContext;
	}
	public newParameter(): NewParameterContext {
		return this.getTypedRuleContext(NewParameterContext, 0) as NewParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
}


export class LegacyParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterName(): ParameterNameContext {
		return this.getTypedRuleContext(ParameterNameContext, 0) as ParameterNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_legacyParameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLegacyParameter) {
	 		listener.enterLegacyParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLegacyParameter) {
	 		listener.exitLegacyParameter(this);
		}
	}
}


export class NewParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterName(): ParameterNameContext {
		return this.getTypedRuleContext(ParameterNameContext, 0) as ParameterNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_newParameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNewParameter) {
	 		listener.enterNewParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNewParameter) {
	 		listener.exitNewParameter(this);
		}
	}
}


export class ParameterNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public DecimalInteger(): TerminalNode {
		return this.getToken(CypherParser.DecimalInteger, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parameterName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParameterName) {
	 		listener.enterParameterName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParameterName) {
	 		listener.exitParameterName(this);
		}
	}
}


export class PropertyExpressionsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyExpression_list(): PropertyExpressionContext[] {
		return this.getTypedRuleContexts(PropertyExpressionContext) as PropertyExpressionContext[];
	}
	public propertyExpression(i: number): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, i) as PropertyExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyExpressions;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyExpressions) {
	 		listener.enterPropertyExpressions(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyExpressions) {
	 		listener.exitPropertyExpressions(this);
		}
	}
}


export class PropertyExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public propertyLookup_list(): PropertyLookupContext[] {
		return this.getTypedRuleContexts(PropertyLookupContext) as PropertyLookupContext[];
	}
	public propertyLookup(i: number): PropertyLookupContext {
		return this.getTypedRuleContext(PropertyLookupContext, i) as PropertyLookupContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyExpression) {
	 		listener.enterPropertyExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyExpression) {
	 		listener.exitPropertyExpression(this);
		}
	}
}


export class PropertyKeysContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyKeyName_list(): PropertyKeyNameContext[] {
		return this.getTypedRuleContexts(PropertyKeyNameContext) as PropertyKeyNameContext[];
	}
	public propertyKeyName(i: number): PropertyKeyNameContext {
		return this.getTypedRuleContext(PropertyKeyNameContext, i) as PropertyKeyNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyKeys;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyKeys) {
	 		listener.enterPropertyKeys(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyKeys) {
	 		listener.exitPropertyKeys(this);
		}
	}
}


export class PropertyKeyNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyKeyName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyKeyName) {
	 		listener.enterPropertyKeyName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyKeyName) {
	 		listener.exitPropertyKeyName(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HexInteger(): TerminalNode {
		return this.getToken(CypherParser.HexInteger, 0);
	}
	public OctalInteger(): TerminalNode {
		return this.getToken(CypherParser.OctalInteger, 0);
	}
	public DecimalInteger(): TerminalNode {
		return this.getToken(CypherParser.DecimalInteger, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_integerLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}


export class DoubleLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ExponentDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.ExponentDecimalReal, 0);
	}
	public RegularDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.RegularDecimalReal, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_doubleLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDoubleLiteral) {
	 		listener.enterDoubleLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDoubleLiteral) {
	 		listener.exitDoubleLiteral(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_namespace;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNamespace) {
	 		listener.enterNamespace(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNamespace) {
	 		listener.exitNamespace(this);
		}
	}
}


export class LeftArrowHeadContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_leftArrowHead;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLeftArrowHead) {
	 		listener.enterLeftArrowHead(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLeftArrowHead) {
	 		listener.exitLeftArrowHead(this);
		}
	}
}


export class RightArrowHeadContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_rightArrowHead;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRightArrowHead) {
	 		listener.enterRightArrowHead(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRightArrowHead) {
	 		listener.exitRightArrowHead(this);
		}
	}
}


export class DashContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dash;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDash) {
	 		listener.enterDash(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDash) {
	 		listener.exitDash(this);
		}
	}
}


export class SymbolicNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UnescapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.UnescapedSymbolicName, 0);
	}
	public EscapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.EscapedSymbolicName, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public HexLetter(): TerminalNode {
		return this.getToken(CypherParser.HexLetter, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_symbolicName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSymbolicName) {
	 		listener.enterSymbolicName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSymbolicName) {
	 		listener.exitSymbolicName(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CYPHER(): TerminalNode {
		return this.getToken(CypherParser.CYPHER, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(CypherParser.EXPLAIN, 0);
	}
	public PROFILE(): TerminalNode {
		return this.getToken(CypherParser.PROFILE, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(CypherParser.USING, 0);
	}
	public PERIODIC(): TerminalNode {
		return this.getToken(CypherParser.PERIODIC, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(CypherParser.COMMIT, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(CypherParser.UNION, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(CypherParser.LOAD, 0);
	}
	public CSV(): TerminalNode {
		return this.getToken(CypherParser.CSV, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public HEADERS(): TerminalNode {
		return this.getToken(CypherParser.HEADERS, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public FIELDTERMINATOR(): TerminalNode {
		return this.getToken(CypherParser.FIELDTERMINATOR, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(CypherParser.OPTIONAL, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public UNWIND(): TerminalNode {
		return this.getToken(CypherParser.UNWIND, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(CypherParser.MERGE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public DETACH(): TerminalNode {
		return this.getToken(CypherParser.DETACH, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(CypherParser.DELETE, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public FOREACH(): TerminalNode {
		return this.getToken(CypherParser.FOREACH, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(CypherParser.RETURN, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(CypherParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(CypherParser.BY, 0);
	}
	public L_SKIP(): TerminalNode {
		return this.getToken(CypherParser.L_SKIP, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(CypherParser.LIMIT, 0);
	}
	public ASCENDING(): TerminalNode {
		return this.getToken(CypherParser.ASCENDING, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(CypherParser.ASC, 0);
	}
	public DESCENDING(): TerminalNode {
		return this.getToken(CypherParser.DESCENDING, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(CypherParser.DESC, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(CypherParser.JOIN, 0);
	}
	public SCAN(): TerminalNode {
		return this.getToken(CypherParser.SCAN, 0);
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public REL(): TerminalNode {
		return this.getToken(CypherParser.REL, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
	public SHORTESTPATH(): TerminalNode {
		return this.getToken(CypherParser.SHORTESTPATH, 0);
	}
	public ALLSHORTESTPATHS(): TerminalNode {
		return this.getToken(CypherParser.ALLSHORTESTPATHS, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(CypherParser.OR, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(CypherParser.XOR, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(CypherParser.AND, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
	public STARTS(): TerminalNode {
		return this.getToken(CypherParser.STARTS, 0);
	}
	public ENDS(): TerminalNode {
		return this.getToken(CypherParser.ENDS, 0);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(CypherParser.CONTAINS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(CypherParser.FILTER, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(CypherParser.EXTRACT, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(CypherParser.ANY, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(CypherParser.NONE, 0);
	}
	public SINGLE(): TerminalNode {
		return this.getToken(CypherParser.SINGLE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(CypherParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CypherParser.FALSE, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(CypherParser.REDUCE, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(CypherParser.CASE, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CypherParser.ELSE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(CypherParser.END, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(CypherParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(CypherParser.THEN, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public YIELD(): TerminalNode {
		return this.getToken(CypherParser.YIELD, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(CypherParser.KEY, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(CypherParser.CATALOG, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(CypherParser.DEFAULT, 0);
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(CypherParser.DATABASES, 0);
	}
	public GRAPH(): TerminalNode {
		return this.getToken(CypherParser.GRAPH, 0);
	}
	public GRAPHS(): TerminalNode {
		return this.getToken(CypherParser.GRAPHS, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(CypherParser.REPLACE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public STOP(): TerminalNode {
		return this.getToken(CypherParser.STOP, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(CypherParser.ROLES, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public USERS(): TerminalNode {
		return this.getToken(CypherParser.USERS, 0);
	}
	public POPULATED(): TerminalNode {
		return this.getToken(CypherParser.POPULATED, 0);
	}
	public PASSWORD(): TerminalNode {
		return this.getToken(CypherParser.PASSWORD, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(CypherParser.CHANGE, 0);
	}
	public REQUIRED(): TerminalNode {
		return this.getToken(CypherParser.REQUIRED, 0);
	}
	public STATUS(): TerminalNode {
		return this.getToken(CypherParser.STATUS, 0);
	}
	public ACTIVE(): TerminalNode {
		return this.getToken(CypherParser.ACTIVE, 0);
	}
	public SUSPENDED(): TerminalNode {
		return this.getToken(CypherParser.SUSPENDED, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(CypherParser.ALTER, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(CypherParser.CURRENT, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(CypherParser.PRIVILEGES, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(CypherParser.GRANT, 0);
	}
	public DENY(): TerminalNode {
		return this.getToken(CypherParser.DENY, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(CypherParser.REVOKE, 0);
	}
	public RELATIONSHIPS(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIPS, 0);
	}
	public NODES(): TerminalNode {
		return this.getToken(CypherParser.NODES, 0);
	}
	public ELEMENT(): TerminalNode {
		return this.getToken(CypherParser.ELEMENT, 0);
	}
	public ELEMENTS(): TerminalNode {
		return this.getToken(CypherParser.ELEMENTS, 0);
	}
	public COPY(): TerminalNode {
		return this.getToken(CypherParser.COPY, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(CypherParser.OF, 0);
	}
	public TRAVERSE(): TerminalNode {
		return this.getToken(CypherParser.TRAVERSE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(CypherParser.READ, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(CypherParser.WRITE, 0);
	}
	public ACCESS(): TerminalNode {
		return this.getToken(CypherParser.ACCESS, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(CypherParser.INDEXES, 0);
	}
	public MANAGEMENT(): TerminalNode {
		return this.getToken(CypherParser.MANAGEMENT, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(CypherParser.NEW, 0);
	}
	public LABEL(): TerminalNode {
		return this.getToken(CypherParser.LABEL, 0);
	}
	public LABELS(): TerminalNode {
		return this.getToken(CypherParser.LABELS, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(CypherParser.NAME, 0);
	}
	public NAMES(): TerminalNode {
		return this.getToken(CypherParser.NAMES, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(CypherParser.TYPE, 0);
	}
	public TYPES(): TerminalNode {
		return this.getToken(CypherParser.TYPES, 0);
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(CypherParser.PROPERTY, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINTS, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(CypherParser.ASSIGN, 0);
	}
	public BTREE(): TerminalNode {
		return this.getToken(CypherParser.BTREE, 0);
	}
	public EXIST(): TerminalNode {
		return this.getToken(CypherParser.EXIST, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(CypherParser.FOR, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(CypherParser.OPTIONS, 0);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(CypherParser.EXECUTE, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(CypherParser.DEFINED, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(CypherParser.FUNCTION, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(CypherParser.FUNCTIONS, 0);
	}
	public BOOSTED(): TerminalNode {
		return this.getToken(CypherParser.BOOSTED, 0);
	}
	public PROCEDURE(): TerminalNode {
		return this.getToken(CypherParser.PROCEDURE, 0);
	}
	public PROCEDURES(): TerminalNode {
		return this.getToken(CypherParser.PROCEDURES, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(CypherParser.ADMIN, 0);
	}
	public ADMINISTRATOR(): TerminalNode {
		return this.getToken(CypherParser.ADMINISTRATOR, 0);
	}
	public BRIEF(): TerminalNode {
		return this.getToken(CypherParser.BRIEF, 0);
	}
	public VERBOSE(): TerminalNode {
		return this.getToken(CypherParser.VERBOSE, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(CypherParser.OUTPUT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_keyword;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}

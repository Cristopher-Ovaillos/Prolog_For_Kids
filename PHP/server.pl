% Cargar las bibliotecas necesarias
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/html_write)).
:- use_module(library(http/http_files)).

% Definir la URL base
:- http_handler(root(.), serve_index, []).
:- http_handler(root(css), serve_css, []).

% Ruta completa para acceder a 'index.html'
index_file('D:/Proyectos/PrologForKid/index.html').

% La acción que realiza cuando se accede a la página
serve_index(_Request) :-
    index_file(File),  % Ruta completa del archivo index.html
    (   exists_file(File)
    ->  http_reply_file(File, [], _)
    ;   throw(error(file_not_found, File))
    ).

% La acción para servir el archivo styles.css
serve_css(_Request) :-
    % Ruta para el archivo CSS
    File = 'D:/Proyectos/PrologForKid/assets/css/styles.css',
    (   exists_file(File)
    ->  http_reply_file(File, [], _)
    ;   throw(error(file_not_found, File))
    ).

% Iniciar el servidor en el puerto 8080
start_server :- 
    http_server(http_dispatch, [port(8080)]).

# WARSZTATY_4

Celem warsztatów jest napisanie pełnej i funkcjonalnej aplikacji frontendowej do katalogowania książek
metodą REST.
Projekt składa się z dwóch części:
Serwer – napisany w Django, implementujący funkcjonalność REST (gotowy, do pobrania z
Githuba),
Klient – napisany w HTML-u i JavaScripcie, komunikujący się z serwerem za pomocą AJAX.
Serwer implementuje klasę Book mającą swój identyfikator ISBN, tytuł, autora, wydawcę i gatunek.

->Klient ma implementować tylko stronę główną.
->Strona ta ma pokazać wszystkie książki stworzone w systemie. 
->Dane mają być wczytane AJAX-em z adresu /book/.
->Na górze tej strony ma być też formularz do tworzenia nowych książek wysyłający dane AJAX-em (metoda POST).
->Gdy użytkownik kliknie na nazwę książki, pod nią ma się rozwijać div z informacjami na temat tej strony wczytane za pomocą AJAX
(GET) z endpointu /book/{id-książki} Div ten ma też zawierać formularz służący do edycji tej książki (AJAX, metoda PUT na endpoincie
/book/{id-książki}).
->Obok nazwy ma się znajdować guzik służący do usuwania książki (AJAX, metoda DELETE na endpoint /book/{id-książki})

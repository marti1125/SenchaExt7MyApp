# Sencha 7.7 MyApp

**Run**
* `sencha app watch`

**Create a new user**
* email: eve.holt@reqres.in
* password: pistol

**Useful links**
* [Introduction to Application Architecture](https://docs.sencha.com/extjs/7.7.0/guides/application_architecture/application_architecture.html)
* [Ext JS Kitchen Sink](https://examples.sencha.com/extjs/7.7.0/examples/kitchensink/#all)

**Tree vs Grid**

1. Grid Normal vs. TreePanel: La diferencia en Memoria

    * Un Grid normal es plano: Cuando usas store: `{ type: 'mi-store' }`, Ext JS crea un almacén de datos plano. No le importa el orden ni las jerarquías; simplemente descarga un arreglo de JSON y lo escupe en filas individuales.
    * Un Tree es un organismo jerárquico indexado: Un TreeStore mantiene un mapa vivo y enlazado de nodos en la memoria de JavaScript. Para poder enlazar un nodo hijo con su padre.

2. El Bug del "Timing" (El clon invisible)

    * El problema principal no era la API, sino cuándo y quién creaba el Store.Cuando declarabas store: `{ type: 'song' }` dentro del panel visual, Ext JS ejecutaba un comportamiento asincrónico muy confuso.
    * La Instancia Fantasma: Ext JS leía el archivo Store.js de forma aislada y disparaba una petición HTTP automática por su cuenta (autoLoad: true). Ese Store se llenaba con tus 4 canciones (lo que veías con éxito en la consola).
    * El Clon Vacío: Milisegundos después, al renderizarse la pestaña "All Songs", el árbol creaba una segunda copia en blanco del Store para consumo propio de la interfaz. Esta copia nacía tarde, se perdía el evento de carga del backend y se quedaba colgada mostrando el mensaje "No hay canciones disponibles".

3. La solución con Ext.create()

    * `store: Ext.create('MyApp.store.Song')`
    * Rompimos por completo ese automatismo de Sencha. Le dijimos explícitamente a la interfaz: "No crees copias automáticas; usa esta instancia exacta de memoria en este preciso instante". Con esto, la vista visual se amarró de forma obligatoria al único almacén real que sí tenía tus datos de los Beatles listos.

4. Resumen de las optimizaciones extras que lograste:

    * El formato de la API: Cambiar el JSON para que devolviera un arreglo plano [ ] en lugar del objeto encapsulado {"text": ".", "children": []} le quitó complejidad al lector nativo de Ext JS.
    * El atributo "text" nativo: Al enviar la propiedad "text" ya resuelta desde Python, eliminamos los convertidores pesados del modelo que se ejecutaban a destiempo.
    * Las hojas (leaf: true): Le indicaste explícitamente al framework quiénes eran canciones y quiénes eran músicos finales, destrabando el motor encargado de dibujar las líneas y flechas desplegables de la jerarquía.
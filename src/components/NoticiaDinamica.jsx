import React, { useEffect, useState } from "react";

function NewsArticle() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Cargar los datos de la noticia
    fetchNews().then(setArticle);
  }, []);

  if (!article) return <p>Loading...</p>;

  const { Titulo, Subtitulo, Fecha, Contenido, Imagen } = article;

  return (
    <div>
      <h1>{Titulo}</h1>
      <p>
        <em>{Subtitulo}</em>
      </p>
      <p>Fecha: {new Date(Fecha).toLocaleDateString()}</p>
      {Imagen && (
        <img
          src={Imagen.data.attributes.formats.large.url}
          alt={Imagen.data.attributes.alternativeText || "Imagen de la noticia"}
          width={Imagen.data.attributes.width}
          height={Imagen.data.attributes.height}
        />
      )}
      <div>
        {Contenido.map((item, index) => {
          // Lógica para cada tipo de contenido
          switch (item.type) {
            case "heading":
              return React.createElement(
                `h${item.level}`,
                { key: index },
                item.children[0].text
              );
            case "paragraph":
              return (
                <p key={index}>{item.children.map((child) => child.text)}</p>
              );
            case "image":
              return (
                <img
                  key={index}
                  src={item.image.formats.large.url}
                  alt={item.image.alternativeText || "Imagen"}
                  width={item.image.width}
                  height={item.image.height}
                />
              );
            case "list":
              return (
                <ol key={index}>
                  {item.children.map((listItem, liIndex) => (
                    <li key={liIndex}>{listItem.children[0].text}</li>
                  ))}
                </ol>
              );
            case "quote":
              return (
                <blockquote key={index}>{item.children[0].text}</blockquote>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default NewsArticle;

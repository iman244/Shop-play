import "./List.css";
import React from "react";
import Item from "../../low-level/Item/Item";
import CstCardIdPB from "../../low-level/Custom/CstCardIdPB";
import CstCardproduct1 from "../../low-level/Custom/CstCardproduct1";
import IconText from "../../low-level/Icon/IconText";

function List({
  slide,
  className,
  comp_ClassName,
  component,
  data,
  firstOrder,
}) {
  let ulClassName = `il-${component.toLowerCase()}List`;
  const Component = (item) => {
    switch (component) {
      case "text":
        return <span className={`${comp_ClassName}`}>{item.text}</span>;
      case "Item":
        return (
          <Item className={`${comp_ClassName} ${item.className}`} data={item} />
        );

      case "CstCardIdPB":
        return (
          <CstCardIdPB
            className={`${comp_ClassName} ${item.className}`}
            img_src={item.img}
            img_alt="category"
            text_p={item.title}
            text_button="shop now"
          />
        );
      case "CstCardproduct1":
        return (
          <CstCardproduct1
            className={`${comp_ClassName} ${item.className}`}
            img_src={item.img}
            img_alt="product"
          />
        );
      case "Icon":
        return (
          <i
            className={
              comp_ClassName ? `${item.icon} ${comp_ClassName}` : `${item.icon}`
            }
          ></i>
        );
      case "IconText":
        return (
          <IconText
            className={`${comp_ClassName} ${item.className}`}
            icon={item.icon}
            text={item.text}
          />
        );
      default:
        return <p>no valid component detected</p>;
    }
  };

  return (
    <>
      {!slide ? (
        <ul
          className={
            className ? `${ulClassName} ${className}` : `${ulClassName}`
          }
        >
          {data ? (
            data.map((item) => (
              <li key={item.id} className={item.liClassName}>
                {Component(item)}
              </li>
            ))
          ) : (
            <p>no data ...</p>
          )}
        </ul>
      ) : (
        <ul
          style={{ transform: `translateX(${firstOrder * -100}vw)` }}
          className={
            className ? `${ulClassName} ${className}` : `${ulClassName}`
          }
        >
          {data ? (
            data.map((item) => {
              return (
                <li key={item.id} className={item.liClassName}>
                  {Component(item)}
                </li>
              );
            })
          ) : (
            <p>no data ...</p>
          )}
        </ul>
      )}
    </>
  );
}

export default List;

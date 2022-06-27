import { Sub } from "../types";

interface Props {
  //  children: React.ReactNode
  subs: Array<Sub>;
}
//the propriety children only is representative that we can use a children if we need

export default function List({ subs }: Props) {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {" "}
              {sub.nick} (<small>{sub.subMonths})</small>
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
}

/*const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
          <h4>
            {" "}
            {sub.nick} (<small>{sub.subMonths}</small>
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
export default List;
//otra forma que se suele encontrar lo mismo
*/

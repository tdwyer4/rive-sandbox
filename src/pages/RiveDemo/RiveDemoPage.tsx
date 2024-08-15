import {
  BaseButton,
  GhostButton,
  PrimaryButton,
} from "../../components/EHButtons/BaseButton";
import { EHRive } from "../../components/EHRive/EHRive";
import "./RiveDemoPage.css";

export function RiveDemoPage() {
  const people = [
    {
      name: "",
      age: 25,
      contact: {
        twitter: "",
        email: "",
      },
    },
    {
      name: "",
      age: 25,
      contact: {
        twitter: "",
        email: "",
      },
    },
  ];

  people.forEach((person) => console.log(person.name));

  const onPrimaryButtonClick = () => {
    console.log("PLAY BUTTON CLICK");
  };

  const overridePersonName: (name: string) => string = (name: string) =>
    "" + name;

  return (
    <div className="riveDemoPage">
      <EHRive
        filename={"/rive/ebi-test.riv"}
        // filename={"/rive/myrivefile.rive"}
        stateMachineName="State Machine 1"
      />
      <h1>Hello!</h1>
      {/*
      <div className="actions">
        <PrimaryButton title="Play" onClick={onPrimaryButtonClick} />
        <GhostButton
          title="Pause"
          onClick={() => console.log("Pause BUTTON CLICK")}
        />
      </div>
      */}
      <ul>
        {people.map((person, i) => {
          return (
            <Card key={i}>
              <>
                <h2>{overridePersonName(person.name)}</h2>
                <p>{person.contact.email}</p>
              </>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}

function Card({ children }: { children: React.ReactElement }) {
  return <div className="MyCard">{children}</div>;
}

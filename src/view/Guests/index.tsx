import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
import { Card, Button } from "react-bootstrap";
import "./guests.scss";
//import "./eventName.scss";
export default function Guests() {
  const breadCrumbsItem = [
    { name: "Home", link: "/" },
    { name: "Nome do Evento", link: "/evento" },
    { name: "Convidados", link: "/convidados" },
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100">
          <div>
            <div>
              <BreadCrumbs items={breadCrumbsItem} />
            </div>
            <div className="d-flex align items center justify-content-center">
              <Card id="card-budget" className=" text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">
                    Total de convidados:
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="d-flex align-items-center justify-content-between m-4">
              <span className="spanConvidados"># Convidados</span>
              <Button> + Adicionar convidado</Button>
            </div>
            <div>{/* Add lista dos convidados */}</div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { BsFillBoxFill, BsFillPersonVcardFill, BsPinMapFill } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import {
  FaPallet,
  FaFileInvoice,
  FaMoneyBillWave,
  FaUserFriends,
  FaDollarSign,
} from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { HiUpload } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { MdFormatListBulletedAdd, MdOutlineNoteAdd } from "react-icons/md";
import "./quick-access.scss";

const QuickAccess = ({ type }) => {
  console.log("mounted");

  let data;

  switch (type) {
    case "bons-de-commande":
      data = {
        title: "Bons de commande",
        icon: <FaPallet />,
        background: "#162446",
      };
      break;
    case "fournisseurs":
      data = {
        title: "Fournisseurs",
        icon: <BsFillPersonVcardFill />,
        background: "#26ae60",
      };
      break;
    case "article":
      data = {
        title: "Articles",
        icon: <BsFillBoxFill />,
        background: "#ff6b6b",
      };
      break;
    case "reception":
      data = {
        title: "Receptions",
        icon: <IoMdDownload />,
        background: "#fbc531",
      };
      break;
    case "factures":
      data = {
        title: "Factures",
        icon: <FaFileInvoice />,
        background: "#f368e0",
      };
      break;
    case "paiements":
      data = {
        title: "Paiements",
        icon: <FaMoneyBillWave />,
        background: "#9b59b6",
      };
      break;
    case "edition":
      data = {
        title: "Edition",
        icon: <AiFillPrinter />,
        background: "#f39c12",
      };
      break;
    case "clients":
      data = {
        title: "Clients",
        icon: <FaUserFriends />,
        background: "#6690B5",
      };
      break;
    case "bons-de-livraison":
      data = {
        title: "Bons de livraison",
        icon: <HiUpload />,
        background: "#162446",
      };
      break;
    case "note-de-frais":
      data = {
        title: "Note de frais",
        icon: <FaUserFriends />,
        background: "#6690B5",
      };
      break;
    case "nature-des-depenses":
      data = {
        title: "Nature des depenses",
        icon: <GiPayMoney />,
        background: "#1424d4",
      };
      break;
    case "contacts":
      data = {
        title: "Contacts",
        icon: <BsFillPersonVcardFill />,
        background: "#9992A5",
      };
      break;
    case "portefuille":
      data = {
        title: "Portefeuille",
        icon: <CiWallet />,
        background: "#FF9234",
      };
      break;
      case "cloture":
        data = {
          title: "Cloture de Caisse",
          icon: <CiWallet />,
          background: "#8FBDD3",
        };
      break;
    case "entrant":
      data = {
        title: "Encours Entrant",
        icon: <IoMdDownload />,
        background: "#ED5107",
      }
      break;
    case "sortant":
      data = {
        title: "Encours Sortant",
        icon: <HiUpload />,
        background: "#1C82AD",
      }
      break;
    case "distribution":
      data = {
        title: "Distribution",
        icon: <LocalShippingIcon />,
        background: "#000",
      }
      break;
    case "vendeur":
      data = {
        title: "Vendeur",
        icon: <BsFillPersonVcardFill />,
        background: "#000",
      }
      break;
    case "secteurs":
      data = {
        title: "Secteurs",
        icon: <BsPinMapFill />,
        background: "#000",
      }
      break;
    case "ajouter-category":
      data = {
        title: "Ajouter Category",
        icon: <MdFormatListBulletedAdd />,
        background: "#454321",
      }
      break;
    case "ajouter-produit":
      data = {
        title: "Ajouter Produit",
        icon:  <MdOutlineNoteAdd />,
        background: "#521A33",
      }
      break;
    default:
      break;
  }

  return (
    <Link style={{ textDecoration: "none" }}>
      <div className="quick-container">
        <div className="box" style={{ backgroundColor: data.background }}>
          <div className="box-icon">{data.icon}</div>
          <h2 className="box-title" style={{ color: "white" }}>
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default QuickAccess;

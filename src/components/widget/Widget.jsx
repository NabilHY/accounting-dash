import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  }

  //temporary
  switch (type) {
    case "cheque-retard":
      data = {
        title: "Chèques en retard",
        total: 2460456,
        number: 54,
        link: [
          {
            title: "Chèques en retard",
          }
        ],
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "non-cloture":
      data = {
        title: "Caisse non clôturée",
        total: 1850432,
        number: 333,
        link: [
          {
            title: "Clôture de caisse",
          }
        ],
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "achat":
      data = {
        title: "Achat à payer",
        total: 1460432,
        number: 83,
        link: [
          {
            title: "Achat à payer",
          }
        ],
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "retard":
      data = {
        title: "Retard portefeuille",
        link: [
          {
            title: "Portefeuille",
          }
        ],
        total: 1460432,
        number: 83,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
        case "depense":
      data = {
        title: "Total des dépenses",
        link: [
          {
            title: "Analyse des dépenses" 
          },
          {
            title: "Journal des dépenses"
          }
        ],
        total: 1460432,
        number: 83,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "inventaire":
      data = {
        title: "Inventaire",
        link: [
          {
            title: "Livre d'inventaire"   
          },
          {
            title: "Mouvement d'article"
          }
        ],
        total: 1460432,
        number: 83,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="right">
        <span className="title">{data.title}</span>
        <span className="counter">
          {formatNumber(data.total)} Dirhams
        </span>
        <span className="number">{data.number}</span>
        {
          data.link.map((link) => 
          <a href={link.title} key={link.title}>
            {link.title}
          </a>)
        }
      </div>
      <div className="left">
        <div className="percentage negative">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};


export default Widget;

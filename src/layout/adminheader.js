import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LongMenu from "../components/menu";
import "./layout.css";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import pro from "../assets/pro.jpeg";

function Header() {
  return (
    <div>
      <div className="header bg-white shadow p-3 m-2 d-flex justify-content-between">
        <div>
          <Tooltip title="Menu">
            <LongMenu />
          </Tooltip>
        </div>
        {/* <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <div>
          {/* <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge> */}
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={pro} />
          </Stack>
        </div>
      </div>
    </div>
  );
}
export default Header;

import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";

const Home=()=>{
    const navigate = useNavigate();
    useEffect(() => {
        let flag = localStorage.getItem("isLogin");
        if (flag === "true") {
          navigate("/ProductsList");
        }
      });
    return (
        <Container>
            <Grid2>
                Welcome 
            </Grid2>
        </Container>
    )
}

export default Home;
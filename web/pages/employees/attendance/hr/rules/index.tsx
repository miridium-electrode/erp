import Background from "@components/background";
import Navbar from "@components/navbar/employees/attendance/hr";
import Container from "@components/container/employees/attendance/hr/jk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Jadwal_Kerja() {
    return (
            <Background>
                <Navbar />
                <Container>
                    <div>
                        <button>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faCaretLeft} />    
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faCaretRight} />
                        </button>
                    </div>
                    <table>
                        <tr>
                            <th>...</th>
                            <th>Nama</th>
                            <th>Berlaku Mulai</th>
                            <th>Digunakan</th>
                        </tr>
                    </table>
                </Container>
            </Background>
        );    
}

export default Jadwal_Kerja;
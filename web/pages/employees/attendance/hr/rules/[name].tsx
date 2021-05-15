import Background from "@components/background";
import Navbar from "@components/navbar/employees/attendance/hr";
import Container from "@components/container/employees/attendance/hr/jk/name";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

/**
 *  /employees/attendance/hr/rules/[name] page
 * @returns 
 */
function NamePage() {
    let route = useRouter(); 
    let { name } = route.query;
    return (
        <Background>
            <Navbar />
            <Container>
                <div>
                    <select name="departemen">
                        <option value="" disabled selected>Departemen</option>
                        <option value="IT">Teknologi Informasi</option>
                    </select>
                    <select name="kantor">
                        <option value="" disabled selected>Kantor</option>
                        <option value="teknologi">Teknologi</option>
                    </select>
                    <select name="jabatan">
                        <option value="" disabled selected>Jabatan</option>
                        <option value="manager">Manager</option>
                    </select>
                    <input type="search" name="q"/>
                </div>
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
            </Container>
        </Background>
    );
}

export default NamePage;
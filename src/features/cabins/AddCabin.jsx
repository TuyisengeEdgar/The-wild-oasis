import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabins-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabins-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
/*
const [showModal, setShowModal] = useState(false);
 <div>
      <Button onClick={() => setShowModal((show) => !show)}>
        Add new Cabin
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCabinForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
*/
export default AddCabin;

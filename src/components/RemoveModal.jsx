export const RemoveModal = ({ onClose, onRemove, patientName }) => {
  return (
    <div className="remove_modal">
      <h3>
        Ви дійсно хочете видалити пацієнта{" "}
        <span style={{ color: "coral" }}>{patientName}</span> з календаря?
      </h3>
      <div className="modalBtnLine">
        <button onClick={onRemove} className="btn btn-danger">
          Видалити
        </button>
        <button onClick={onClose} className="btn btn-warning">Відміна</button>
      </div>
    </div>
  );
};

const [confirmacao, setConfirmacao] = useState(null);

const handleConfirmacao = (evento) => {
  setConfirmacao(evento.target.value);
};

return (
  <div>
    <label>
      Sim ou Não?
      <select value={confirmacao} onChange={handleConfirmacao}>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>
    </label>
  </div>
);
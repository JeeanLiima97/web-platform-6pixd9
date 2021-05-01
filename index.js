const disciplinas = ["Compiladores", "Poo", "Banco de dados"];
const aulas = [];
const professores = [];
const appDiv = document.getElementById("disciplinas");
const form = document.getElementById("formId");
const saveButton = document.getElementById("saveId");
const saveButtonAula = document.getElementById("saveIdAula");
const cardFormId = document.getElementById("cardFormId");
const cardFormIdAula = document.getElementById("cardFormIdAula");

var example_array = {
  ValueA: "POO",
  ValueB: "Engenharia Experimental",
  ValueC: "Ingles tecnico"
};

var select = document.getElementById("selectDisc");
for (index in example_array) {
  select.options[select.options.length] = new Option(
    example_array[index],
    index
  );
}

//appDiv.innerHTML = disciplinas
//.map(it => {
//   return `<option>${it}</option>`;
// })
// .join();

document.getElementById("buttonProfessor").onclick = () => {
  cardFormId.hidden = !cardFormId.hidden;
};
document.getElementById("buttonAula").onclick = () => {
  cardFormIdAula.hidden = !cardFormIdAula.hidden;
};

let idCount = 0;
saveButton.onclick = () => {
  const value = {
    id: ++idCount
  };
  for (var i = 0; i < form.elements.length; i++) {
    const item = form.elements.item(i);
    value[item.name] = item.value;
  }

  professores.push(value);
  showTable();
};
saveButtonAula.onclick = () => {
  const value = {
    id: ++idCount
  };
  for (var i = 0; i < form.elements.length; i++) {
    const item = form.elements.item(i);
    value[item.name] = item.value;
  }
  aulas.push(value);
  showTableAula();
};

function showTable() {
  const table = document.getElementById("tableId");

  table.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>E-Mail</th>
    <th>Endereço</th>
    <th>Telefone</th>
  </tr>`;
  table.innerHTML += professores
    .map(it => {
      return `
      <tr>
    <td>${it.id}</td>
    <td>${it.fname}</td>
    <td>${it.femail}</td>
    <td>${it.fendereco}</td>
    <td>${it.ftelefone}</td>
    </tr>
    `;
    })
    .join();
}

function showTableAula() {
  const tableAula = document.getElementById("tableIdAula");

  tableAula.innerHTML = `
    <tr>
      <th>Professor</th>
    <th>Disciplina</th>
    <th>Alunos</th>
  </tr>`;
  tableAula.innerHTML += aulas
    .map(it => {
      return `
      <tr>
    <td>${it.fprofessor}</td>
    <td>POO</td>
    <td>${it.falunos}</td>
    </tr>
    `;
    })
    .join();
}

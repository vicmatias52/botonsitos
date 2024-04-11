document.querySelector("#btn1").onclick=()=>
Swal.fire("Ejemplo Alerta bonita 1");
document.querySelector("#btn2").onclick=()=>
Swal.fire({
    title: "El internet?",
    text: "Todavia esta por ahi?",
    icon: "question"
  });
  document.querySelector("#btn3").onclick=()=>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Hay algo que esta mal!",
    footer: '<a href="#">¿Por que tengo este problema?</a>'
  });
  document.querySelector("#btn4").onclick=()=>
  Swal.fire({
    title: "¿Quieres guardar estos cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `No guardar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Guardado!", "", "Correcto");
    } else if (result.isDenied) {
      Swal.fire("Los cambios no se guardaron", "", "info");
    }
  });
  document.querySelector("#btn5").onclick=()=>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Tu trabajo ha sido guardado",
    showConfirmButton: false,
    timer: 1500
  });
  document.querySelector("#btn6").onclick=()=>
  Swal.fire({
    title: "Estas seguro?",
    text: "no puedes revertir esto ehh!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borralo!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Tu archivo ha sido borrado.",
        icon: "success"
      });
    }
  });

  document.querySelector("#btn7").onclick=()=>
  Swal.fire({
    title: "Esooo!",
    text: "imagen personalizada.",
    imageUrl: "https://i.pinimg.com/originals/3d/2d/02/3d2d02f9c9d4c73b739a93d88534186b.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });


$(document).ready(function () {
    function mostrarDatos() {
        $.ajax({
            url: "mostrardatos.php",
            type: "get",
            success: function (response) {
                $("#tablaRegistros tbody").html(response);
            },
            error: function (error) {
                console.error(error);
            }
        });
    }

    mostrarDatos();

    $("#formularioderegistro").submit(function (e) {
        e.preventDefault();
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let cedula = $("#cedula").val();
        let correo = $("#correo").val();
        let estado = $("#sel").val();

        $.ajax({
            url: "procesarformulario.php",
            type: "post",
            data: {
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                correo: correo,
                estado: estado,
            },
            success: function (response) {
                alert("Se guardó con éxito");
                $("#formularioderegistro")[0].reset();
                mostrarDatos();
            },
            error: function (error) {
                console.error(error);
                alert("Error al guardar dato");
            }
        });
    });

    $("#tablaRegistros").on("click", ".eliminar", function () {
        let id = $(this).data("id");
        eliminardato(id);
    });

    function eliminardato(id) {
        $.ajax({
            url: "eliminar_registro.php",
            type: "post",
            data: { id: id },
            success: function (response) {
                alert(response);
                mostrarDatos();
            },
            error: function (error) {
                console.error(error);
                alert("Error al eliminar la fila");
            }
        });
    }

    $("#tablaRegistros").on("click", ".actualizar", function () {
        let id = $(this).data("id");
        let nombre = $(this).data("nombre");
        let apellido = $(this).data("apellido");
        let cedula = $(this).data("cedula");
        let correo = $(this).data("correo");
        let estado = $(this).data("sel");

        //relenar el formulario con los datos actuales
        $("#nombre").val(nombre);
        $("#apellido").val(apellido)
        $("#cedula").val(cedula);
        $("#correo").val(correo);
        $("#sel").val(estado);

        //cambiar el comportamiento del formulario para actualizar
        $("#formularioderegistro").off("submit").submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: "actualizar_registro.php",
                type: "post",
                data: {
                    id: id,
                    nombre: $("#nombre").val(),
                    apellido: $("#apellido").val(),
                    cedula: $("#cedula").val(),
                    correo: $("#correo").val(),
                    estado: $("#sel").val(),
                },
                success: function (response) {
                    alert(response);
                    $("#formularioderegistro")[0].reset();
                    mostrarDatos();
                    //restaurar el comportamiento original del formulario
                    $("#formularioderegistro").off("submit").submit(function (e) {
                        e.preventDefault();
                        let id = $(this).data("id");
                        let nombre = $(this).data("nombre");
                        let apellido = $(this).data("apellido");
                        let cedula = $(this).data("cedula");
                        let correo = $(this).data("correo");
                        let estado = $(this).data("sel");
                        $.ajax({
                            url: "procesarformulario.php",
                            type: "post",
                            data: {
                                nombre: nombre,
                                apellido: apellido,
                                cedula: cedula,
                                correo: correo,
                                estado: estado,
                            },
                            success: function (response) {
                                alert(response);
                                $("#formularioderegistro")[0].reset();
                                mostrarDatos();
                            },
                            error: function (error) {
                                console.error(error)
                            }
                        });
                    });
                },
                error: function (error) {
                    console.error(error);
                    alert("hubo un error al actualizar el registro");
                },
            });
        });
    });
});
// Función que simula un retardo aleatorio
function retardoAleatorio() {
    return new Promise(resolve => {
        const tiempo = Math.floor(Math.random() * 5000) + 1000; // entre 1 y 5 segundos
        setTimeout(resolve, tiempo);
    });
}

// Función para realizar el pedido
async function realizarPedido() {
    console.log('Realizando pedido...');
    await retardoAleatorio();
    console.log('Pedido realizado.');
    return 'pedido';
}

// Función para preparar el pedido
async function prepararPedido(pedido) {
    console.log('Preparando el ' + pedido + '...');
    await retardoAleatorio();
    console.log('Pedido preparado.');
    return 'pedido preparado';
}

// Función para entregar el pedido
async function entregarPedido(pedidoPreparado) {
    console.log('Entregando el ' + pedidoPreparado + '...');
    await retardoAleatorio();
    console.log('Pedido entregado.');
}

// Función principal para realizar todo el proceso
async function hacerPedido() {
    try {
        const pedido = await realizarPedido();
        const pedidoPreparado = await prepararPedido(pedido);
        await entregarPedido(pedidoPreparado);
        console.log('Proceso completo.');
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}
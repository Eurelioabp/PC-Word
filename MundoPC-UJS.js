class DispositivosEntrada {
	constructor(tipoEntrada, marca){
		this._tipoEntrada = tipoEntrada;
		this._marca = marca;
	}

	get tipoEntrada(){
	return this._tipoEntrada;
}
	set tipoEntrada(tipoEntrada){
		this._tipoEntrada = tipoEntrada;
	}

	get marca(){
		return this._marca;
	}

	set marca(marca){
		this._marca = marca;
	}
}

class Raton extends DispositivosEntrada {

	static contadorRatones = 0;

	constructor(tipoEntrada, marca){
		super(tipoEntrada, marca)
		this._idRaton = ++Raton.contadorRatones;
	}

	get idRaton() {
		return this._idRaton;
	}

	toString() {
		return `Raton: idRaton: ${this._idRaton}, tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca}`
	}
}

//raton2.marca = "HP" para ponerle la marca que queremos porque llama indirectamente al método set.

class Teclado extends DispositivosEntrada {

	static contadorTeclados = 0;

	constructor(tipoEntrada, marca){
		super(tipoEntrada, marca)
		this._idTeclado = ++Teclado.contadorTeclados;
	}

	get idTeclado(){
		return this._idTeclado;
	}

	//Sobreescribimos el método toString() de la clase Raton para usar sus parámetros aquí.
	toString(){
		return `Teclado: idTeclado ${this._idTeclado}, tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca}`;
	}
}

class Monitor{

	static contadorMonitores = 0;

	constructor(marca, tamanio){
		this._marca = marca;
		this._tamanio = tamanio;
		this._idMonitor = ++Monitor.contadorMonitores;
	}

	get idMonitor(){
		return this._idMonitor;
	}

	get marca(){
		return this._marca;
	}

	set marca(marca){
		this._marca = marca;
	}

	get tamanio(){
		return this._tamanio;
	}

	set tamanio(tamanio){
		this._tamanio = tamanio;
	}

	toString(){
		return `Monitor: idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}`
	}
}

class Computadora {

	static contadorComputadoras = 0;

	//Utilizamos un método de agregación, no de herencia para su construcción aquí.

	constructor(nombre, monitor, raton, teclado){
		this._idComputadora = ++Computadora.contadorComputadoras;
		this._nombre = nombre;
		this._monitor = monitor;
		this._raton = raton;
		this._teclado = teclado;
	}

	toString(){
		return `Computadora ${this._idComputadora}: ${this._nombre}, \n ${this._monitor}, \n ${this._raton}, \n ${this._teclado}`
	}
}


let raton1 = new Raton("USB", "HP");
let teclado1 = new Teclado("Bluetooth", "DELL");
let monitor1 = new Monitor("IBM",'15"(inch)');

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1) //Aquí usamos las variables que definimos en las clases ya creadas para su uso como propiedas de la clase "Computadora"

console.log(computadora1.toString());

//Al llamar a la impresión en consola, podremos ver nuestro objeto "computadora1" con los parámetros asignados

/*
Computadora 1: HP, 
 Monitor: idMonitor: 1, Marca: IBM, Tamaño: 15"(inch), 
 Raton: idRaton: 1, tipo de entrada: USB, marca: HP, 
 Teclado: idTeclado 1, tipo de entrada: Bluetooth, marca: DELL
 */

//Creamos una nueva clase para mostrar un Orden con los valores asignados a nuestra variable computadora:

class Orden {

	static contadorOrdenes = 0;

	constructor(){
		this._idOrden = ++Orden.contadorOrdenes;
		this._computadoras = [];
	}

	get idOrden(){
		return this._idOrden;
	}

	agregarComputadora(computadora){
		this._computadoras.push(computadora);
	}

	mostrarOrden(){
		let computadorasOrden = "";
		for (let computadora of this._computadoras){
			computadorasOrden += `\n${computadora}`;
		}

		console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
	}
}

let orden1 = new Orden() //No recibe parámetros

//Llamamos al método agregarComputadora() para agregar los objetos "Computadora" que tengamos creados, en nuestro caso, computadora1 y computadora2

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

console.log(orden1.mostrarOrden()); //Para mandar a llamar el método mostrarOrden de nuestra clase y mostrar las computadoras agregadas.

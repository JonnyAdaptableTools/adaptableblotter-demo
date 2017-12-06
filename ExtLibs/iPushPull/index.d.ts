// Type definitions for wolfy87-eventemitter v4.2.9
// Project: https://github.com/Wolfy87/EventEmitter
// Definitions by: ryiwamoto <https://github.com/ryiwamoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class EventEmitter extends Wolfy87EventEmitter.EventEmitter {}
export = EventEmitter;
export as namespace EventEmitter;


declare namespace Wolfy87EventEmitter {

    /**
     * Hash Object for manipulating multiple events.
     */
    interface MultipleEvents {
        [event: string]: any //Function | Function[]
    }

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    export class EventEmitter {
        /**
         * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
         * @return {Function} Non conflicting EventEmitter class.
         */
        static noConflict(): typeof EventEmitter;

        /**
         * Returns the listener array for the specified event.
         * Will initialise the event object and listener arrays if required.
         * Will return an object if you use a regex search. The object contains keys for each matched event.
         * So /ba[rz]/ might return an object containing bar and baz.
         * But only if you have either defined them with defineEvent or added some listeners to them.
         * Each property in the object response is an array of listener functions.
         *
         * @param {string|RegExp} event Name of the event to return the listeners from.
         * @return {Function[|Object]} All listener functions for the event.
         */
        getListeners(event: string): Function[];

        /**
         * Returns the listener array for the specified event.
         * Will initialise the event object and listener arrays if required.
         * Will return an object if you use a regex search. The object contains keys for each matched event.
         * So /ba[rz]/ might return an object containing bar and baz.
         * But only if you have either defined them with defineEvent or added some listeners to them.
         * Each property in the object response is an array of listener functions.
         *
         * @param {string|RegExp} event Name of the event to return the listeners from.
         * @return {Function[]|Object} All listener functions for the event.
         */
        getListeners(event: RegExp): {[event:string]: Function};


        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {string|RegExp} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListener(event: string, listener: Function): EventEmitter;

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {string|RegExp} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListener(event: RegExp, listener: Function): EventEmitter;

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {string|RegExp} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        on(event: string, listener: Function): EventEmitter;

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {string|RegExp} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        on(event: RegExp, listener: Function): EventEmitter;

        /**
         * Takes a list of listener objects and flattens it into a list of listener functions.
         *
         * @param {Object[]} listeners Raw listener objects.
         * @return {Function[]} Just the listener functions.
         */
        flattenListeners(listeners: {listener: Function}[]): Function[];

        /**
         * Fetches the requested listeners via getListeners but will always return the results inside an object.
         * This is mainly for internal use but others may find it useful.
         *
         * @param event {string|RegExp} Name of the event to return the listeners from.
         * @return {Object} All listener functions for an event in object
         */
        getListenersAsObject(event: string): {[event:string]: Function};

        /**
         * Fetches the requested listeners via getListeners but will always return the results inside an object.
         * This is mainly for internal use but others may find it useful.
         *
         * @param event {string|RegExp} Name of the event to return the listeners from.
         * @return {Object} All listener functions for an event in object
         */
        getListenersAsObject(event: RegExp): {[event:string]: Function};

        /**
         * Semi-alias of addListener. It will add a listener that will be
         * automatically removed after it's first execution.
         *
         * @param event {string|RegExp} Name of the event to attach the listener to.
         * @param listener {Function} Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addOnceListener(event: string, listener: Function): EventEmitter;

        /**
         * Semi-alias of addListener. It will add a listener that will be
         * automatically removed after it's first execution.
         *
         * @param event {string|RegExp} Name of the event to attach the listener to.
         * @param listener {Function} Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addOnceListener(event: RegExp, listener: Function): EventEmitter;

        /**
         * Semi-alias of addListener. It will add a listener that will be
         * automatically removed after it's first execution.
         *
         * @param event {string|RegExp} Name of the event to attach the listener to.
         * @param listener {Function} Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        once(event: string, listener: Function): EventEmitter;

        /**
         * Semi-alias of addListener. It will add a listener that will be
         * automatically removed after it's first execution.
         *
         * @param event {string|RegExp} Name of the event to attach the listener to.
         * @param listener {Function} Method to be called when the event is emitted.
         * If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        once(event: RegExp, listener: Function): EventEmitter;

        /**
         * Defines an event name.
         * This is required if you want to use a regex to add a listener to multiple events at once.
         * If you don't do this then how do you expect it to know what event to add to?
         * Should it just add to every possible match for a regex? No. That is scary and bad.
         * You need to tell it what event names should be matched by a regex.
         *
         * @param {string} event Name of the event to create.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        defineEvent(event: string): EventEmitter;

        /**
         * Defines an event name.
         * This is required if you want to use a regex to add a listener to multiple events at once.
         * If you don't do this then how do you expect it to know what event to add to?
         * Should it just add to every possible match for a regex? No. That is scary and bad.
         * You need to tell it what event names should be matched by a regex.
         *
         * @param {string[]} events Name of the event to create.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        defineEvents(events: string[]): EventEmitter;

        /**
         * Removes a listener function from the specified event.
         * When passed a regular expression as the event name, it will remove the listener from all events that match it.
         *
         * @param {String|RegExp} event Name of the event to remove the listener from.
         * @param {Function} listener Method to remove from the event.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeListener(event: string, listener: Function): EventEmitter;

        /**
         * Removes a listener function from the specified event.
         * When passed a regular expression as the event name, it will remove the listener from all events that match it.
         *
         * @param {String|RegExp} event Name of the event to remove the listener from.
         * @param {Function} listener Method to remove from the event.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeListener(event: RegExp, listener: Function): EventEmitter;

        /**
         * Removes a listener function from the specified event.
         * When passed a regular expression as the event name, it will remove the listener from all events that match it.
         *
         * @param {String|RegExp} event Name of the event to remove the listener from.
         * @param {Function} listener Method to remove from the event.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        off(event: string, listener: Function): EventEmitter;

        /**
         * Removes a listener function from the specified event.
         * When passed a regular expression as the event name, it will remove the listener from all events that match it.
         *
         * @param {String|RegExp} event Name of the event to remove the listener from.
         * @param {Function} listener Method to remove from the event.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        off(event: RegExp, listener: Function): EventEmitter;

        /**
         * Adds listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can add to multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added.
         * You can also pass it a regular expression to add the array of listeners to all events that match it.
         * Yeah, this function does quite a bit. That's probably a bad thing.
         *
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to add to multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListeners(event: string, listeners: Function[]): EventEmitter;

        /**
         * Adds listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can add to multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added.
         * You can also pass it a regular expression to add the array of listeners to all events that match it.
         * Yeah, this function does quite a bit. That's probably a bad thing.
         *
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to add to multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListeners(event: RegExp, listeners: Function[]): EventEmitter;

        /**
         * Adds listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can add to multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added.
         * You can also pass it a regular expression to add the array of listeners to all events that match it.
         * Yeah, this function does quite a bit. That's probably a bad thing.
         *
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to add to multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListeners(event: MultipleEvents): EventEmitter;

        /**
         * Removes listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can remove from multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be removed.
         * You can also pass it a regular expression to remove the listeners from all events that match it.
         *
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to remove.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeListeners(event: string, listeners: Function[]): EventEmitter;

        /**
         * Removes listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can remove from multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be removed.
         * You can also pass it a regular expression to remove the listeners from all events that match it.
         *
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to remove.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeListeners(event: RegExp, listeners: Function[]): EventEmitter;

        /**
         * Removes listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can remove from multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be removed.
         * You can also pass it a regular expression to remove the listeners from all events that match it.
         *
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to remove.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeListeners(event: MultipleEvents): EventEmitter;

        /**
         * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job.
         * You should really use those instead, this is a little lower level.
         * The first argument will determine if the listeners are removed (true) or added (false).
         * If you pass an object as the second argument you can add/remove from multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added/removed.
         * You can also pass it a regular expression to manipulate the listeners of all events that match it.
         *
         * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to add/remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        manipulateListeners(remove: boolean, event: string, listeners: Function[]): EventEmitter;

        /**
         * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job.
         * You should really use those instead, this is a little lower level.
         * The first argument will determine if the listeners are removed (true) or added (false).
         * If you pass an object as the second argument you can add/remove from multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added/removed.
         * You can also pass it a regular expression to manipulate the listeners of all events that match it.
         *
         * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to add/remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        manipulateListeners(remove: boolean, event: RegExp, listeners: Function[]): EventEmitter;

        /**
         * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job.
         * You should really use those instead, this is a little lower level.
         * The first argument will determine if the listeners are removed (true) or added (false).
         * If you pass an object as the second argument you can add/remove from multiple events at once.
         * The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added/removed.
         * You can also pass it a regular expression to manipulate the listeners of all events that match it.
         *
         * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
         * @param {String|Object|RegExp} event An event name if you will pass an array of listeners next.
         * An object if you wish to add/remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        manipulateListeners(remove: boolean, event: MultipleEvents): EventEmitter;

        /**
         * Removes all listeners from a specified event.
         * If you do not specify an event then all listeners will be removed.
         * That means every event will be emptied.
         * You can also pass a regex to remove all events that match it.
         *
         * @param {String|RegExp} [event] Optional name of the event to remove all listeners for.
         * Will remove from every event if not passed.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeEvent(event?: string): EventEmitter;

        /**
         * Removes all listeners from a specified event.
         * If you do not specify an event then all listeners will be removed.
         * That means every event will be emptied.
         * You can also pass a regex to remove all events that match it.
         *
         * @param {String|RegExp} [event] Optional name of the event to remove all listeners for.
         * Will remove from every event if not passed.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        removeEvent(event?: RegExp): EventEmitter;

        /**
         * Alias of removeEvent.
         *
         * Added to mirror the node API.
         */
        removeAllListeners(event?: string): EventEmitter;

        /**
         * Alias of removeEvent.
         *
         * Added to mirror the node API.
         */
        removeAllListeners(event?: RegExp): EventEmitter;

        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         * You can also pass a regular expression to emit to all events that match it.
         *
         * @param {String|RegExp} event Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        emitEvent(event: string, ...args: any[]): EventEmitter;

        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         * You can also pass a regular expression to emit to all events that match it.
         *
         * @param {String|RegExp} event Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        emitEvent(event: RegExp, ...args: any[]): EventEmitter;

        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         * You can also pass a regular expression to emit to all events that match it.
         *
         * @param {String|RegExp} event Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        trigger(event: string, ...args: any[]): EventEmitter;

        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         * You can also pass a regular expression to emit to all events that match it.
         *
         * @param {String|RegExp} event Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        trigger(event: RegExp, ...args: any[]): EventEmitter;

        /**
         * Subtly different from emitEvent in that it will pass its arguments on to the listeners,
         * as opposed to taking a single array of arguments to pass on.
         * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
         *
         * @param {String|RegExp} event Name of the event to emit and execute listeners for.
         * @param {... any[]} args Optional additional arguments to be passed to each listener.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        emit(event: string, ...args: any[]): EventEmitter;

        /**
         * Subtly different from emitEvent in that it will pass its arguments on to the listeners,
         * as opposed to taking a single array of arguments to pass on.
         * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
         *
         * @param {String|RegExp} event Name of the event to emit and execute listeners for.
         * @param {... any[]} args Optional additional arguments to be passed to each listener.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        emit(event: RegExp, ...args: any[]): EventEmitter;

        /**
         * Sets the current value to check against when executing listeners. If a
         * listeners return value matches the one set here then it will be removed
         * after execution. This value defaults to true.
         *
         * @param {any} value The new value to check for when executing listeners.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        setOnceReturnValue(value: any): EventEmitter;
    }
}

// Type definitions for socket.io-client 1.4.4
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre>, Damian Connolly <https://github.com/divillysausages>, Florent Poujol <https://github.com/florentpoujol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var io: SocketIOClientStatic;

declare module 'socket.io-client' {
	export = io;
}

interface SocketIOClientStatic {

	/**
	 * Looks up an existing 'Manager' for multiplexing. If the user summons:
	 * 	'io( 'http://localhost/a' );'
	 * 	'io( 'http://localhost/b' );'
	 *
	 * We reuse the existing instance based on the same scheme/port/host, and
	 * we initialize sockets for each namespace. If autoConnect isn't set to
	 * false in the options, then we'll automatically connect
	 * @param uri The uri that we'll connect to, including the namespace, where '/' is the default one (e.g. http://localhost:4000/somenamespace)
	 * @opts Any connect options that we want to pass along
	 * @return A Socket object
	 */
	( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * Auto-connects to the window location and defalt namespace.
	 * E.g. window.protocol + '//' + window.host + ':80/'
	 * @opts Any connect options that we want to pass along
	 * @return A Socket object
	 */
	( opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * @see the default constructor (io(uri, opts))
	 */
	connect( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * @see the default constructor (io(opts))
	 */
	connect( opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Socket;

	/**
	 * The socket.io protocol revision number this client works with
	 * @default 4
	 */
	protocol: number;

	/**
	 * Socket constructor - exposed for the standalone build
	 */
	Socket: SocketIOClient.Socket;

	/**
	 * Manager constructor - exposed for the standalone build
	 */
	Manager: SocketIOClient.ManagerStatic;
}

declare namespace SocketIOClient {

	/**
	 * The base emiter class, used by Socket and Manager
	 */
	interface Emitter {
		/**
		 * Adds a listener for a particular event. Calling multiple times will add
		 * multiple listeners
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on the
		 * event in question
		 * @return This Emitter
		 */
		on( event: string, fn: Function ):Emitter;

		/**
		 * @see on( event, fn )
		 */
		addEventListener( event: string, fn: Function ):Emitter;

		/**
		 * Adds a listener for a particular event that will be invoked
		 * a single time before being automatically removed
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on
		 * the event in question
		 * @return This Emitter
		 */
		once( event: string, fn: Function ):Emitter;

		/**
		 * Removes a listener for a particular type of event. This will either
		 * remove a specific listener, or all listeners for this type of event
		 * @param event The event that we want to remove the listener of
		 * @param fn The function to remove, or null if we want to remove all functions
		 * @return This Emitter
		 */
		off( event: string, fn?: Function ):Emitter;

		/**
		 * @see off( event, fn )
		 */
		removeListener( event: string, fn?: Function ):Emitter;

		/**
		 * @see off( event, fn )
		 */
		removeEventListener( event: string, fn?: Function ):Emitter;

		/**
		 * Removes all event listeners on this object
		 * @return This Emitter
		 */
		removeAllListeners():Emitter;

		/**
		 * Emits 'event' with the given args
		 * @param event The event that we want to emit
		 * @param args Optional arguments to emit with the event
		 * @return Emitter
		 */
		emit( event: string, ...args: any[] ):Emitter;

		/**
		 * Returns all the callbacks for a particular event
		 * @param event The event that we're looking for the callbacks of
		 * @return An array of callback Functions, or an empty array if we don't have any
		 */
		listeners( event: string ):Function[];

		/**
		 * Returns if we have listeners for a particular event
		 * @param event The event that we want to check if we've listeners for
		 * @return True if we have listeners for this event, false otherwise
		 */
		hasListeners( event: string ):boolean;
	}

	/**
	 * The Socket static interface
	 */
	interface SocketStatic {

		/**
		 * Creates a new Socket, used for communicating with a specific namespace
		 * @param io The Manager that's controlling this socket
		 * @param nsp The namespace that this socket is for (@default '/')
		 * @return A new Socket
		 */
		( io: SocketIOClient.Manager, nsp: string ): Socket;

		/**
		 * Creates a new Socket, used for communicating with a specific namespace
		 * @param io The Manager that's controlling this socket
		 * @param nsp The namespace that this socket is for (@default '/')
		 * @return A new Socket
		 */
		new ( url: string, opts: any ): SocketIOClient.Manager;
	}

	/**
	 * The Socket that we use to connect to a Namespace on the server
	 */
	interface Socket extends Emitter {

		/**
		 * The Manager that's controller this socket
		 */
		io: SocketIOClient.Manager;

		/**
		 * The namespace that this socket is for
		 * @default '/'
		 */
		nsp: string;

		/**
		 * The ID of the socket; matches the server ID and is set when we're connected, and cleared
		 * when we're disconnected
		 */
		id: string;

		/**
		 * Are we currently connected?
		 * @default false
		 */
		connected: boolean;

		/**
		 * Are we currently disconnected?
		 * @default true
		 */
		disconnected: boolean;

		/**
		 * Opens our socket so that it connects. If the 'autoConnect' option for io is
		 * true (default), then this is called automatically when the Socket is created
		 */
		open(): Socket;

		/**
		 * @see open();
		 */
		connect(): Socket;

		/**
		 * Sends a 'message' event
		 * @param args Any optional arguments that we want to send
		 * @see emit
		 * @return This Socket
		 */
		send( ...args: any[] ):Socket;

		/**
		 * An override of the base emit. If the event is one of:
		 * 	connect
		 * 	connect_error
		 * 	connect_timeout
		 * 	connecting
		 * 	disconnect
		 * 	error
		 * 	reconnect
		 * 	reconnect_attempt
		 * 	reconnect_failed
		 * 	reconnect_error
		 * 	reconnecting
		 * 	ping
		 * 	pong
		 * then the event is emitted normally. Otherwise, if we're connected, the
		 * event is sent. Otherwise, it's buffered.
		 *
		 * If the last argument is a function, then it will be called
		 * as an 'ack' when the response is received. The parameter(s) of the
		 * ack will be whatever data is returned from the event
		 * @param event The event that we're emitting
		 * @param args Optional arguments to send with the event
		 * @return This Socket
		 */
		emit( event: string, ...args: any[] ):Socket;

		/**
		 * Disconnects the socket manually
		 * @return This Socket
		 */
		close():Socket;

		/**
		 * @see close()
		 */
		disconnect():Socket;

		/**
		* Sets the compress flag.
		* @param compress If `true`, compresses the sending data
		* @return this Socket
		*/
		compress(compress: boolean):Socket;
	}

	/**
	 * The Manager static interface
	 */
	interface ManagerStatic {
		/**
		 * Creates a new Manager
		 * @param uri The URI that we're connecting to (e.g. http://localhost:4000)
		 * @param opts Any connection options that we want to use (and pass to engine.io)
		 * @return A Manager
		 */
		( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Manager;

		/**
		 * Creates a new Manager with the default URI (window host)
		 * @param opts Any connection options that we want to use (and pass to engine.io)
		 */
		( opts: SocketIOClient.ConnectOpts ):SocketIOClient.Manager;

		/**
		 * @see default constructor
		 */
		new ( uri: string, opts?: SocketIOClient.ConnectOpts ): SocketIOClient.Manager;

		/**
		 * @see default constructor
		 */
		new ( opts: SocketIOClient.ConnectOpts ):SocketIOClient.Manager;
	}

	/**
	 * The Manager class handles all the Namespaces and Sockets that we're using
	 */
	interface Manager extends Emitter {

		/**
		 * All the namespaces currently controlled by this Manager, and the Sockets
		 * that we're using to communicate with them
		 */
		nsps: { [namespace:string]: Socket };

		/**
		 * The connect options that we used when creating this Manager
		 */
		opts: SocketIOClient.ConnectOpts;

		/**
		 * The state of the Manager. Either 'closed', 'opening', or 'open'
		 */
		readyState: string;

		/**
		 * The URI that this manager is for (host + port), e.g. 'http://localhost:4000'
		 */
		uri: string;

		/**
		 * The currently connected sockets
		 */
		connecting: Socket[];

		/**
		 * If we should auto connect (also used when creating Sockets). Set via the
		 * opts object
		 */
		autoConnect: boolean;

		/**
		 * Gets if we should reconnect automatically
		 * @default true
		 */
		reconnection(): boolean;

		/**
		 * Sets if we should reconnect automatically
		 * @param v True if we should reconnect automatically, false otherwise
		 * @default true
		 * @return This Manager
		 */
		reconnection( v: boolean ): Manager;

		/**
		 * Gets the number of reconnection attempts we should try before giving up
		 * @default Infinity
		 */
		reconnectionAttempts(): number;

		/**
		 * Sets the number of reconnection attempts we should try before giving up
		 * @param v The number of attempts we should do before giving up
		 * @default Infinity
		 * @return This Manager
		 */
		reconnectionAttempts( v: number ): Manager;

		/**
		 * Gets the delay in milliseconds between each reconnection attempt
		 * @default 1000
		 */
		reconnectionDelay(): number;

		/**
		 * Sets the delay in milliseconds between each reconnection attempt
		 * @param v The delay in milliseconds
		 * @default 1000
		 * @return This Manager
		 */
		reconnectionDelay( v: number ): Manager;

		/**
		 * Gets the max reconnection delay in milliseconds between each reconnection
		 * attempt
		 * @default 5000
		 */
		reconnectionDelayMax(): number;

		/**
		 * Sets the max reconnection delay in milliseconds between each reconnection
		 * attempt
		 * @param v The max reconnection dleay in milliseconds
		 * @return This Manager
		 */
		reconnectionDelayMax( v: number ): Manager;

		/**
		 * Gets the randomisation factor used in the exponential backoff jitter
		 * when reconnecting
		 * @default 0.5
		 */
		randomizationFactor(): number;

		/**
		 * Sets the randomisation factor used in the exponential backoff jitter
		 * when reconnecting
		 * @param The reconnection randomisation factor
		 * @default 0.5
		 * @return This Manager
		 */
		randomizationFactor( v: number ): Manager;

		/**
		 * Gets the timeout in milliseconds for our connection attempts
		 * @default 20000
		 */
		timeout(): number;

		/**
		 * Sets the timeout in milliseconds for our connection attempts
		 * @param The connection timeout milliseconds
		 * @return This Manager
		 */
		timeout(v: number): Manager;

		/**
		 * Sets the current transport socket and opens our connection
		 * @param fn An optional callback to call when our socket has either opened, or
		 * failed. It can take one optional parameter of type Error
		 * @return This Manager
		 */
		open( fn?: (err?: any) => void ): Manager;

		/**
		 * @see open( fn );
		 */
		connect( fn?: (err?: any) => void ): Manager;

		/**
		 * Creates a new Socket for the given namespace
		 * @param nsp The namespace that this Socket is for
		 * @return A new Socket, or if one has already been created for this namespace,
		 * an existing one
		 */
		socket( nsp: string ): Socket;
	}

	/**
	 * Options we can pass to the socket when connecting
	 */
	interface ConnectOpts {

		/**
		 * Should we force a new Manager for this connection?
		 * @default false
		 */
		forceNew?: boolean;

		/**
		 * Should we multiplex our connection (reuse existing Manager) ?
		 * @default true
		 */
		multiplex?: boolean;

		/**
		 * The path to get our client file from, in the case of the server
		 * serving it
		 * @default '/socket.io'
		 */
		path?: string;

		/**
		 * Should we allow reconnections?
		 * @default true
		 */
		reconnection?: boolean;

		/**
		 * How many reconnection attempts should we try?
		 * @default Infinity
		 */
		reconnectionAttempts?: number;

		/**
		 * The time delay in milliseconds between reconnection attempts
		 * @default 1000
		 */
		reconnectionDelay?: number;

		/**
		 * The max time delay in milliseconds between reconnection attempts
		 * @default 5000
		 */
		reconnectionDelayMax?: number;

		/**
		 * Used in the exponential backoff jitter when reconnecting
		 * @default 0.5
		 */
		randomizationFactor?: number;

		/**
		 * The timeout in milliseconds for our connection attempt
		 * @default 20000
		 */
		timeout?: number;

		/**
		 * Should we automically connect?
		 * @default true
		 */
		autoConnect?: boolean;

		/**
		 * The host that we're connecting to. Set from the URI passed when connecting
		 */
		host?: string;

		/**
		 * The hostname for our connection. Set from the URI passed when connecting
		 */
		hostname?: string;

		/**
		 * If this is a secure connection. Set from the URI passed when connecting
		 */
		secure?: boolean;

		/**
		 * The port for our connection. Set from the URI passed when connecting
		 */
		port?: string;

		/**
		 * Any query parameters in our uri. Set from the URI passed when connecting
		 */
		query?: Object;

		/**
		 * `http.Agent` to use, defaults to `false` (NodeJS only)
		 */
		agent?: string|boolean;

		/**
		 * Whether the client should try to upgrade the transport from
		 * long-polling to something better.
		 * @default true
		 */
		upgrade?: boolean;

		/**
		 * Forces JSONP for polling transport.
		 */
		forceJSONP?: boolean;

		/**
		 * Determines whether to use JSONP when necessary for polling. If
		 * disabled (by settings to false) an error will be emitted (saying
		 * "No transports available") if no other transports are available.
		 * If another transport is available for opening a connection (e.g.
		 * WebSocket) that transport will be used instead.
		 * @default true
		 */
		jsonp?: boolean;

		/**
		 * Forces base 64 encoding for polling transport even when XHR2
		 * responseType is available and WebSocket even if the used standard
		 * supports binary.
		 */
		forceBase64?: boolean;

		/**
		 * Enables XDomainRequest for IE8 to avoid loading bar flashing with
		 * click sound. default to `false` because XDomainRequest has a flaw
		 * of not sending cookie.
		 * @default false
		 */
		enablesXDR?: boolean;

		/**
		 * The param name to use as our timestamp key
		 * @default 't'
		 */
		timestampParam?: string;

		/**
		 * Whether to add the timestamp with each transport request. Note: this
		 * is ignored if the browser is IE or Android, in which case requests
		 * are always stamped
		 * @default false
		 */
		timestampRequests?: boolean;

		/**
		 * A list of transports to try (in order). Engine.io always attempts to
		 * connect directly with the first one, provided the feature detection test
		 * for it passes.
		 * @default ['polling','websocket']
		 */
		transports?: string[];

		/**
		 * The port the policy server listens on
		 * @default 843
		 */
		policyPost?: number;

		/**
		 * If true and if the previous websocket connection to the server succeeded,
		 * the connection attempt will bypass the normal upgrade process and will
		 * initially try websocket. A connection attempt following a transport error
		 * will use the normal upgrade process. It is recommended you turn this on
		 * only when using SSL/TLS connections, or if you know that your network does
		 * not block websockets.
		 * @default false
		 */
		rememberUpgrade?: boolean;

		/**
		 * Are we only interested in transports that support binary?
		 */
		onlyBinaryUpgrades?: boolean;

		/**
		 * Header options for Node.js client
		 */
		extraHeaders?: Object;

		/**
		 * (SSL) Certificate, Private key and CA certificates to use for SSL.
		 * Can be used in Node.js client environment to manually specify
		 * certificate information.
		 */
		pfx?: string;

		/**
		 * (SSL) Private key to use for SSL. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		key?: string;

		/**
		 * (SSL) A string or passphrase for the private key or pfx. Can be
		 * used in Node.js client environment to manually specify certificate
		 * information.
		 */
		passphrase?: string

		/**
		 * (SSL) Public x509 certificate to use. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		cert?: string;

		/**
		 * (SSL) An authority certificate or array of authority certificates to
		 * check the remote host against.. Can be used in Node.js client
		 * environment to manually specify certificate information.
		 */
		ca?: string|string[];

		/**
		 * (SSL) A string describing the ciphers to use or exclude. Consult the
		 * [cipher format list]
		 * (http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT) for
		 * details on the format.. Can be used in Node.js client environment to
		 * manually specify certificate information.
		 */
		ciphers?: string;

		/**
		 * (SSL) If true, the server certificate is verified against the list of
		 * supplied CAs. An 'error' event is emitted if verification fails.
		 * Verification happens at the connection level, before the HTTP request
		 * is sent. Can be used in Node.js client environment to manually specify
		 * certificate information.
		 */
		rejectUnauthorized?: boolean;

	}
}

declare namespace ipushpull {
    import IPromise = angular.IPromise;
    interface IRequestResult {
        success: boolean;
        data: any;
        httpCode: number;
        httpText: string;
    }
    interface IApiService {
        block: () => void;
        unblock: () => void;
        getSelfInfo: () => IPromise<IRequestResult>;
        refreshAccessTokens: (refreshToken: string) => IPromise<IRequestResult>;
        userLogin: (data: any) => IPromise<IRequestResult>;
        userLogout: () => IPromise<IRequestResult>;
        createFolder: (data: any) => IPromise<IRequestResult>;
        getDomains: () => IPromise<IRequestResult>;
        getDomain: (domainId: number) => IPromise<IRequestResult>;
        updateDomain: (data: any) => IPromise<IRequestResult>;
        getDomainPages: (domainId: number) => IPromise<IRequestResult>;
        getDomainsAndPages: (client: string) => IPromise<IRequestResult>;
        getPage: (data: any) => IPromise<IRequestResult>;
        getPageByName: (data: any) => IPromise<IRequestResult>;
        getPageByUuid: (data: any) => IPromise<IRequestResult>;
        getPageAccess: (data: any) => IPromise<IRequestResult>;
        createPage: (data: any) => IPromise<IRequestResult>;
        createAnonymousPage: (data: any) => IPromise<IRequestResult>;
        savePageContent: (data: any) => IPromise<IRequestResult>;
        savePageContentDelta: (data: any) => IPromise<IRequestResult>;
        savePageSettings: (data: any) => IPromise<IRequestResult>;
        deletePage: (data: any) => IPromise<IRequestResult>;
        saveUserInfo: (data: any) => IPromise<IRequestResult>;
        getUserMetaData: (data: any) => IPromise<IRequestResult>;
        saveUserMetaData: (data: any) => IPromise<IRequestResult>;
        deleteUserMetaData: (data: any) => IPromise<IRequestResult>;
        changePassword: (data: any) => IPromise<IRequestResult>;
        changeEmail: (data: any) => IPromise<IRequestResult>;
        forgotPassword: (data: any) => IPromise<IRequestResult>;
        resetPassword: (data: any) => IPromise<IRequestResult>;
        inviteUsers: (data: any) => IPromise<IRequestResult>;
        acceptInvitation: (data: any) => IPromise<IRequestResult>;
        refuseInvitation: (data: any) => IPromise<IRequestResult>;
        domainInvitations: (data: any) => IPromise<IRequestResult>;
        userInvitations: () => IPromise<IRequestResult>;
        domainAccessLog: (data: any) => IPromise<IRequestResult>;
        domainUsers: (data: any) => IPromise<IRequestResult>;
        signupUser: (data: any) => IPromise<IRequestResult>;
        activateUser: (data: any) => IPromise<IRequestResult>;
        setDomainDefault: (data: any) => IPromise<IRequestResult>;
        resendInvite: (data: any) => IPromise<IRequestResult>;
        updateDomainAccess: (data: any) => IPromise<IRequestResult>;
        removeUsersFromDomain: (data: any) => IPromise<IRequestResult>;
        getInvitation: (data: any) => IPromise<IRequestResult>;
        cancelInvitations: (data: any) => IPromise<IRequestResult>;
        getDomainAccessGroups: (data: any) => IPromise<IRequestResult>;
        getDomainAccessGroup: (data: any) => IPromise<IRequestResult>;
        addDomainAccessGroup: (data: any) => IPromise<IRequestResult>;
        putDomainAgroupMembers: (data: any) => IPromise<IRequestResult>;
        putDomainAgroupPages: (data: any) => IPromise<IRequestResult>;
        updateDomainAgroup: (data: any) => IPromise<IRequestResult>;
        deleteDomainAGroup: (data: any) => IPromise<IRequestResult>;
        getDomainPageAccess: (data: any) => IPromise<IRequestResult>;
        getDomainCustomers: (data: any) => IPromise<IRequestResult>;
        saveDomainPageAccess: (data: any) => IPromise<IRequestResult>;
        getTemplates: (data: any) => IPromise<IRequestResult>;
        saveCustomer: (data: any) => IPromise<IRequestResult>;
        updateCustomer: (data: any) => IPromise<IRequestResult>;
        removeCustomer: (data: any) => IPromise<IRequestResult>;
        getDocEmailRules: (data: any) => IPromise<IRequestResult>;
        createDocEmailRule: (data: any) => IPromise<IRequestResult>;
        updateDocEmailRule: (data: any) => IPromise<IRequestResult>;
        deleteDocEmailRule: (data: any) => IPromise<IRequestResult>;
    }
}

declare namespace ipushpull {
    import IPromise = angular.IPromise;
    import IEventEmitter = Wolfy87EventEmitter.EventEmitter;
    interface IAuthService extends IEventEmitter {
        EVENT_LOGGED_IN: string;
        EVENT_RE_LOGGING: string;
        EVENT_LOGIN_REFRESHED: string;
        EVENT_LOGGED_OUT: string;
        EVENT_ERROR: string;
        EVENT_401: string;
        EVENT_USER_UPDATED: string;
        user: IUserSelf;
        authenticate: (force?: boolean) => IPromise<any>;
        login: (username: string, password: string) => IPromise<any>;
        logout: () => void;
    }
    interface IUserSelf {
        id: number;
        url: string;
        email: string;
        screen_name: string;
        first_name: string;
        last_name: string;
        mobile_phone_number: string;
        pushbullet_id: string;
        default_domain_id: number;
        default_page_id: number;
        default_domain_name: string;
        default_page_name: string;
        pending_invitation_count: number;
        can_create_folders: boolean;
        meta_data: any[];
    }
}

declare namespace ipushpull {
    interface IEncryptionKey {
        name: string;
        passphrase: string;
    }
    interface ICryptoService {
        decryptContent: (key: any, data: string) => IPageContent;
        encryptContent: (key: IEncryptionKey, data: IPageContent) => string;
    }
}

declare namespace ipushpull {
    import IModule = angular.IModule;
    interface IIPPConfig {
        api_url?: string;
        ws_url?: string;
        api_key: string;
        api_secret: string;
        transport?: string;
        storage_prefix?: string;
    }
    const module: IModule;
}

declare namespace ipushpull {
    interface IPageContentLink {
        external: boolean;
        address: string;
    }
    interface IPageCellStyle {
        "background-color"?: string;
        "color"?: string;
        "font-family"?: string;
        "font-size"?: string;
        "font-style"?: string;
        "font-weight"?: string;
        "height"?: string;
        "number-format"?: string;
        "text-align"?: string;
        "text-wrap"?: string;
        "width"?: string;
        "tbs"?: string;
        "rbs"?: string;
        "bbs"?: string;
        "lbs"?: string;
        "tbc"?: string;
        "rbc"?: string;
        "bbc"?: string;
        "lbc"?: string;
        "tbw"?: string;
        "rbw"?: string;
        "bbw"?: string;
        "lbw"?: string;
    }
    interface IPageContentCell {
        value: string;
        formatted_value?: string;
        link?: IPageContentLink;
        style?: IPageCellStyle;
        dirty?: boolean;
    }
    interface IPageContent extends Array<any> {
        [index: number]: IPageContentCell[];
    }
    interface IPageDeltaContentCol {
        col_index: number;
        cell_content: IPageContentCell;
    }
    interface IPageDeltaContentRow {
        row_index: number;
        cols: IPageDeltaContentCol[];
    }
    interface IPageDelta {
        new_rows: number[];
        new_cols: number[];
        content_delta: IPageDeltaContentRow[];
    }
}
declare namespace ipushpull {
    interface IPageContentProvider {
        canDoDelta: boolean;
        update: (rawContent: IPageContent, isCurrent: boolean) => void;
        reset: () => void;
        getCell: (rowIndex: number, columnIndex: number) => IPageContentCell;
        updateCell: (rowIndex: number, columnIndex: number, data: IPageContentCell) => void;
        addRow: () => void;
        addColumn: () => void;
        removeRow: () => void;
        removeColumn: () => void;
        getDelta: () => IPageDelta;
        getFull: () => IPageContent;
        cleanDirty: () => void;
    }
    class PageContent implements IPageContentProvider {
        canDoDelta: boolean;
        private _original;
        private _current;
        private _newRows;
        private _newCols;
        readonly current: IPageContent;
        constructor(rawContent: IPageContent);
        update(rawContent: IPageContent, isCurrent: boolean): void;
        reset(): void;
        getCell(rowIndex: number, columnIndex: number): IPageContentCell;
        updateCell(rowIndex: number, columnIndex: number, data: IPageContentCell): void;
        addRow(index?: number): IPageContentCell[];
        addColumn(index?: number): void;
        removeRow(): void;
        removeColumn(): void;
        getDelta(): IPageDelta;
        getFull(): IPageContent;
        cleanDirty(): void;
    }
}

declare namespace ipushpull {
    import IPromise = angular.IPromise;
    import IEventEmitter = Wolfy87EventEmitter.EventEmitter;
    interface IPageTypes {
        regular: number;
        pageAccessReport: number;
        domainUsageReport: number;
        globalUsageReport: number;
        pageUpdateReport: number;
        alert: number;
        pdf: number;
        liveUsage: number;
    }
    interface IPageServiceContent {
        id: number;
        seq_no: number;
        content_modified_timestamp: Date;
        content: IPageContent;
        content_modified_by: any;
        push_interval: number;
        pull_interval: number;
        is_public: boolean;
        description: string;
        encrypted_content: string;
        encryption_key_used: string;
        encryption_type_used: number;
        special_page_type: number;
    }
    interface IPageServiceMeta {
        by_name_url: string;
        id: number;
        name: string;
        description: string;
        url: string;
        uuid: string;
        access_rights: string;
        background_color: string;
        content: IPageContent;
        content_modified_by: any;
        content_modified_timestamp: Date;
        created_by: any;
        created_timestamp: Date;
        domain_id: number;
        domain_name: string;
        domain_url: string;
        encrypted_content: string;
        encryption_key_to_use: string;
        encryption_key_used: string;
        encryption_type_to_use: number;
        encryption_type_used: number;
        is_obscured_public: boolean;
        is_public: boolean;
        is_template: boolean;
        modified_by: any;
        modified_timestamp: Date;
        pull_interval: number;
        push_interval: number;
        record_history: boolean;
        seq_no: number;
        show_gridlines: boolean;
        special_page_type: number;
        ws_enabled: boolean;
    }
    interface IPage extends IPageServiceMeta {
    }
    interface IPageRangeRights {
        ro: number[];
        no: number[];
    }
    interface IPageRange {
        name: string;
        start: string;
        end: string;
        rights: IPageRangeRights;
        freeze: boolean;
    }
    interface IUserPageDomainCurrentUserAccess {
        default_page_id: number;
        default_page_url: string;
        domain_id: number;
        domain_url: string;
        is_active: boolean;
        is_administrator: boolean;
        is_default_domain: boolean;
        is_pending: boolean;
        page_count: number;
        user_id: number;
        user_url: string;
    }
    interface IUserPageDomainAccess {
        alerts_enabled: boolean;
        by_name_url: string;
        current_user_domain_access: IUserPageDomainCurrentUserAccess;
        description: string;
        display_name: string;
        domain_type: number;
        encryption_enabled: boolean;
        id: number;
        is_page_access_mode_selectable: boolean;
        is_paying_customer: boolean;
        login_screen_background_color: "";
        logo_url: string;
        name: string;
        page_access_mode: number;
        page_access_url: string;
        url: string;
    }
    interface IUserPageAccess {
        by_name_url: string;
        content_by_name_url: string;
        content_url: string;
        domain: IUserPageDomainAccess;
        domain_id: number;
        domain_name: string;
        domain_url: string;
        encryption_to_use: number;
        encryption_key_to_use: string;
        id: number;
        is_administrator: boolean;
        is_public: boolean;
        is_users_default_page: boolean;
        name: string;
        pull_interval: number;
        push_interval: number;
        special_page_type: number;
        url: string;
        write_access: boolean;
        ws_enabled: boolean;
    }
    interface IPageTemplate {
        by_name_url: string;
        category: string;
        description: string;
        domain_id: number;
        domain_name: string;
        id: number;
        name: string;
        special_page_type: number;
        url: string;
        uuid: string;
    }
    interface IPageCloneOptions {
        clone_ranges?: boolean;
    }
    interface IPageService extends IEventEmitter {
        TYPE_REGULAR: number;
        TYPE_ALERT: number;
        TYPE_PDF: number;
        TYPE_PAGE_ACCESS_REPORT: number;
        TYPE_DOMAIN_USAGE_REPORT: number;
        TYPE_GLOBAL_USAGE_REPORT: number;
        TYPE_PAGE_UPDATE_REPORT: number;
        TYPE_LIVE_USAGE_REPORT: number;
        EVENT_READY: string;
        EVENT_NEW_CONTENT: string;
        EVENT_NEW_META: string;
        EVENT_RANGES_UPDATED: string;
        EVENT_ACCESS_UPDATED: string;
        EVENT_DECRYPTED: string;
        EVENT_ERROR: string;
        ready: boolean;
        decrypted: boolean;
        updatesOn: boolean;
        types: IPageTypes;
        encryptionKeyPull: IEncryptionKey;
        encryptionKeyPush: IEncryptionKey;
        data: IPage;
        access: IUserPageAccess;
        Content: IPageContentProvider;
        Ranges: IPageRangesCollection;
        start: () => void;
        stop: () => void;
        push: (forceFull?: boolean) => IPromise<any>;
        saveMeta: (data: any) => IPromise<any>;
        destroy: () => void;
        decrypt: (key: IEncryptionKey) => void;
        clone: (folderId: number, name: string, options?: IPageCloneOptions) => IPromise<IPageService>;
    }
}
declare namespace ipushpull {
    import IPromise = angular.IPromise;
    import IEventEmitter = Wolfy87EventEmitter.EventEmitter;
    interface IPageRangeItem {
        name: string;
        toObject: () => IPageRange;
    }
    interface IPagePermissionRange extends IPageRangeItem {
        rowStart: number;
        rowEnd: number;
        colStart: number;
        colEnd: number;
        setPermission: (userId: number, permission?: string) => void;
        getPermission: (userId: number) => string;
    }
    interface IPageFreezingRange extends IPageRangeItem {
        subject: string;
        count: number;
    }
    class PermissionRange implements IPagePermissionRange {
        name: string;
        rowStart: number;
        rowEnd: number;
        colStart: number;
        colEnd: number;
        private _permissions;
        constructor(name: string, rowStart?: number, rowEnd?: number, colStart?: number, colEnd?: number, permissions?: IPageRangeRights);
        setPermission(userId: number, permission?: string): void;
        getPermission(userId: number): string;
        toObject(): IPageRange;
    }
    type TFreezeSubject = "rows" | "cols";
    class FreezingRange implements IPageRangeItem {
        name: string;
        subject: TFreezeSubject;
        count: number;
        static readonly SUBJECT_ROWS: string;
        static readonly SUBJECT_COLUMNS: string;
        constructor(name: string, subject?: TFreezeSubject, count?: number);
        toObject(): IPageRange;
    }
    interface IPageRangesCollection extends IEventEmitter {
        TYPE_PERMISSION_RANGE: string;
        TYPE_FREEZING_RANGE: string;
        EVENT_UPDATED: string;
        ranges: (IPagePermissionRange | IPageFreezingRange)[];
        setRanges: (ranges: IPageRangeItem[]) => IPageRangesCollection;
        addRange: (range: IPageRangeItem) => IPageRangesCollection;
        removeRange: (rangeName: string) => IPageRangesCollection;
        save: () => IPromise<any>;
        parse: (pageAccessRights: string) => IPageRangeItem[];
    }
}

declare namespace ipushpull {
    interface IStorageProvider {
        prefix: string;
        suffix: string;
        create: (key: string, value: string, expireDays?: number) => void;
        save: (key: string, value: string, expireDays?: number) => void;
        get: (key: string, defaultValue?: any) => any;
        remove: (key: string) => void;
    }
    interface IStorageService {
        user: IStorageProvider;
        global: IStorageProvider;
        persistent: IStorageProvider;
    }
}

declare namespace ipushpull {
    interface IUtils {
        parseApiError: (err: any, def: string) => string;
        clonePageContent: (content: IPageContent) => IPageContent;
    }
    let Utils: IUtils;
}

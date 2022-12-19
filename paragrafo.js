class Paragraph {
	#string

	/**
 * Creates a new Paragraph with a given text.
 *
 * @param string
 */
	constructor(string) {
		this.#string = string;
	}


	getParagraphLength() {
		return this.#string.length
	}

	getTotalWords() {
		const regex = new RegExp(/^[a-zA-Z]+$/);
		return this.#string.split(" ").filter(e => e.match(regex))
	}

}

export { Paragraph };
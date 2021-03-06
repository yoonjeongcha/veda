export default class View {
    private wrapper: HTMLElement;
    private element: HTMLElement;
    private canvas: HTMLCanvasElement;

    constructor(wrapper: HTMLElement) {
        this.wrapper = wrapper;

        this.element = document.createElement('div');
        this.element.classList.add('veda');

        this.canvas = document.createElement('canvas');

        this.element.appendChild(this.canvas);
        this.wrapper.appendChild(this.element);
    }

    destroy(): void {
        this.element.remove();
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    show(): void {
        document.body.classList.add('veda-enabled');
    }

    hide(): void {
        document.body.classList.remove('veda-enabled');
    }
}

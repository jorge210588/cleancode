(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlElementProps{
        id: string,
        type: HtmlType,
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor({
            id,
            type,
        }:HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value:string,
        placeholder:string,
    }

    class InputAttributes{
        public value: string;
        public placeholder: string;
        
        constructor({
            value,
            placeholder,
        }:InputAttributesProps) {
            this.value = value;
            this.placeholder = placeholder;   
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    interface InputElementProps {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string,
    }

    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor({
            id,
            type,
            value,
            placeholder,
        }:InputElementProps){
            this.html = new HtmlElement({id, type});
            this.attributes = new InputAttributes({value,placeholder});
            this.events = new InputEvents();
        }
    }
    const nameField = new InputElement({id:'txtName', type:'input', value:'Jorge', placeholder:'Enter first name'});
    //const nameField = new InputEvents('Jorge', 'Enter first name', 'txtName');

    console.log({ nameField });

})()
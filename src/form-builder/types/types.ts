type ReactElement = {};
type HTMLAttributes<T> = {}

type operations = "=="|"<"|">"|"!="|"<="|">="

export interface IStructureObject extends HTMLAttributes<HTMLInputElement> {
  when: [string, operations, any]
}

export interface IFormBuilder {
  structure: {
    [key: string]: IStructureObject
  }
  events: {
    submit: Function
    change: Function
  }
  components: {
    input: ReactElement
  },
  errors: {
    [key: string]: string
  }
}

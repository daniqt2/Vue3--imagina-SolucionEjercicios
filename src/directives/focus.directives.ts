import { DirectiveBinding } from 'vue'

export const highlightDirective = {
    updated: (el: HTMLElement, binding: DirectiveBinding) => {
        const searchValue = binding.value
        const text = el.textContent
        if (text?.toLocaleLowerCase() === searchValue.toLowerCase())
            el.classList.add('highlight')
        else el.classList.remove('highlight')
    },
}

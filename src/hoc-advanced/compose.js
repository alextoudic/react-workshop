export default (fn, ...fns) => (...args) => fns.reduceRight((acc, f) => f(acc), fn(...args))

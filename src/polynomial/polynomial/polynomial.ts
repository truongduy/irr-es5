import { DEFAULT_ROOT_FINDER_OPTIONS, RootFinderOptions, Root, RootFinderFactory } from '../../root-finder'
import { IPolynomial } from '../definition'
import { Line } from '../line'

export class Polynomial implements IPolynomial {
  protected derivative: Polynomial | null = null

  constructor (
    protected readonly coefficients: number[],
  ) {}

  protected getDegree (): number {
    return this.coefficients.length - 1
  }

  public calculate (x: number): number {
    const degree = this.getDegree()
    let accumulatedX: number = 1
    let result: number = 0

    for (let index = degree; index >= 0; index--) {
      accumulatedX = parseFloat(accumulatedX.toString().replace(/e\+308|e\+307/, 'e+306').replace(/e\-308|e\-307/, 'e-306'))
      result += accumulatedX * this.coefficients[index]
      accumulatedX *= x
    }

    return result
  }
  public differentiate (): Polynomial {
    if (this.derivative) {
      return this.derivative
    }

    const degree = this.getDegree()
    const coefficients: number[] = []

    this.coefficients.forEach((coefficient, index) => {
      if (index === degree) {
        return
      }

      coefficients.push(coefficient * (degree - index))
    })

    return this.derivative = new Polynomial(coefficients)
  }
  public findRoot (options: RootFinderOptions): Root {
    options = Object.assign({}, DEFAULT_ROOT_FINDER_OPTIONS, options)

    const factory = new RootFinderFactory(options)
    const finder = factory.make(options.method!)

    const root = finder.findRoot(this)

    if (options.fallbackMethod
      && !root.converged
      && options.method !== options.fallbackMethod) {
      const fallbackFinder = factory.make(options.fallbackMethod!)

      return fallbackFinder.findRoot(this)
    }

    return root
  }
  public getCoefficients (): number[] {
    return this.coefficients
  }
  public getTangentAt (x: number): Line {
    const derivative = this.differentiate()
    const m = derivative.calculate(x)
    const k = this.calculate(x) - m * x

    return new Line(m, k)
  }
}

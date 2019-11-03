export class FactoryResolverMock {
  resolveComponentFactory(component: any) {
    return { create() {}, hostView: "" };
  }
}

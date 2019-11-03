export class ViewContainerRefMock {
  public createComponent(factory: any) {
    return changeDetectorRefStub;
  }
}

export const changeDetectorRefStub = {
  changeDetectorRef: { detectChanges() {} }
};

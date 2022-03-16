import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <!-- 3. TODO Display the properties of the selected customer -->
    <ul>
      <li>Customer Id:</li>
      <li>Customer Name:</li>
      <li>Customer Address:</li>
      <li>Customer City:</li>
      <li>Customer Country:</li>
    </ul>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SelectedCustomerPageComponent {}

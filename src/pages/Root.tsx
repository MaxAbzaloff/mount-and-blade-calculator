import React from 'react';
import { Select } from '@blueprintjs/select';
import { genders } from '../utils';

const RootPage = () => {
  const GenderSelect = Select.ofType<typeof genders[0]>();

  return (
    <div>
      <section>
        <h1>Gender</h1>
        <p>
          <GenderSelect
            items={genders}
            itemRenderer={(p) => <div>value</div>}
            onItemSelect={(p) => console.log(p)}
          />
        </p>
      </section>
    </div>
  );
};

export { RootPage };

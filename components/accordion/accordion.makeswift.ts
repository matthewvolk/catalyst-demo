import { ComponentIcon } from '@makeswift/runtime';
import { TextInput } from '@makeswift/runtime/controls';
import { forwardNextDynamicRef } from '@makeswift/runtime/next';
import dynamic from 'next/dynamic';

import { runtime } from '~/lib/makeswift/runtime';

export const props = {
  title: TextInput({ label: 'Title', defaultValue: 'Accordion', selectAll: true }),
};

runtime.registerComponent(
  forwardNextDynamicRef((patch) =>
    dynamic(() => patch(import('./accordion').then(({ Accordion }) => Accordion))),
  ),
  { type: 'Accordion', label: 'Accordion', icon: ComponentIcon.Navigation, props },
);

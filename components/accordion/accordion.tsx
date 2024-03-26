import { forwardRef } from 'react';

import {
  Accordion as UiAccordion,
  AccordionContent as UiAccordionContent,
  AccordionItem as UiAccordionItem,
  AccordionTrigger as UiAccordionTrigger,
} from '../ui/accordion';

interface Props {
  title?: string;
}

export const Accordion = forwardRef<HTMLDivElement, Props>(({ title = 'Accordion' }, ref) => {
  return (
    <UiAccordion defaultValue={[title]} ref={ref} type="multiple">
      <UiAccordionItem value="Item">
        <UiAccordionTrigger>{title}</UiAccordionTrigger>
        <UiAccordionContent>
          <p>Content</p>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  );
});

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

import ButtonDemo from '@/components/demos/button-demo';
import BadgeDemo from '@/components/demos/badge-demo';
import ToggleDemo from '@/components/demos/toggle-demo';
import ToggleGroupDemo from '@/components/demos/toggle-group-demo';

import InputDemo from '@/components/demos/input-demo';
import TextareaDemo from '@/components/demos/textarea-demo';
import LabelDemo from '@/components/demos/label-demo';
import CheckboxDemo from '@/components/demos/checkbox-demo';
import RadioGroupDemo from '@/components/demos/radio-group-demo';
import SelectDemo from '@/components/demos/select-demo';
import SwitchDemo from '@/components/demos/switch-demo';
import SliderDemo from '@/components/demos/slider-demo';
import FormDemo from '@/components/demos/form-demo';

import CardDemo from '@/components/demos/card-demo';
import AvatarDemo from '@/components/demos/avatar-demo';
import SkeletonDemo from '@/components/demos/skeleton-demo';
import SeparatorDemo from '@/components/demos/separator-demo';
import AccordionDemo from '@/components/demos/accordion-demo';
import TableDemo from '@/components/demos/table-demo';
import ProgressDemo from '@/components/demos/progress-demo';
import ScrollAreaDemo from '@/components/demos/scroll-area-demo';

import AlertDemo from '@/components/demos/alert-demo';
import AlertDialogDemo from '@/components/demos/alert-dialog-demo';
import DialogDemo from '@/components/demos/dialog-demo';
import SonnerDemo from '@/components/demos/sonner-demo';

import DropdownMenuDemo from '@/components/demos/dropdown-menu-demo';
import SheetDemo from '@/components/demos/sheet-demo';
import DrawerDemo from '@/components/demos/drawer-demo';
import PopoverDemo from '@/components/demos/popover-demo';
import TooltipDemo from '@/components/demos/tooltip-demo';
import CommandDemo from '@/components/demos/command-demo';

import TabsDemo from '@/components/demos/tabs-demo';
import BreadcrumbDemo from '@/components/demos/breadcrumb-demo';
import PaginationDemo from '@/components/demos/pagination-demo';

const SECTIONS = [
  {
    id: 'general',
    title: 'General',
    components: [
      { name: 'Button', component: ButtonDemo },
      { name: 'Badge', component: BadgeDemo },
      { name: 'Toggle', component: ToggleDemo },
      { name: 'Toggle Group', component: ToggleGroupDemo },
    ],
  },
  {
    id: 'forms',
    title: 'Forms',
    components: [
      { name: 'Input', component: InputDemo },
      { name: 'Textarea', component: TextareaDemo },
      { name: 'Label', component: LabelDemo },
      { name: 'Checkbox', component: CheckboxDemo },
      { name: 'Radio Group', component: RadioGroupDemo },
      { name: 'Select', component: SelectDemo },
      { name: 'Switch', component: SwitchDemo },
      { name: 'Slider', component: SliderDemo },
      { name: 'Form', component: FormDemo },
    ],
  },
  {
    id: 'display',
    title: 'Display',
    components: [
      { name: 'Card', component: CardDemo },
      { name: 'Avatar', component: AvatarDemo },
      { name: 'Skeleton', component: SkeletonDemo },
      { name: 'Separator', component: SeparatorDemo },
      { name: 'Accordion', component: AccordionDemo },
      { name: 'Table', component: TableDemo },
      { name: 'Progress', component: ProgressDemo },
      { name: 'Scroll Area', component: ScrollAreaDemo },
    ],
  },
  {
    id: 'feedback',
    title: 'Feedback',
    components: [
      { name: 'Alert', component: AlertDemo },
      { name: 'Alert Dialog', component: AlertDialogDemo },
      { name: 'Dialog', component: DialogDemo },
      { name: 'Sonner (Toast)', component: SonnerDemo },
    ],
  },
  {
    id: 'overlay',
    title: 'Overlay',
    components: [
      { name: 'Dropdown Menu', component: DropdownMenuDemo },
      { name: 'Sheet', component: SheetDemo },
      { name: 'Drawer', component: DrawerDemo },
      { name: 'Popover', component: PopoverDemo },
      { name: 'Tooltip', component: TooltipDemo },
      { name: 'Command', component: CommandDemo },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    components: [
      { name: 'Tabs', component: TabsDemo },
      { name: 'Breadcrumb', component: BreadcrumbDemo },
      { name: 'Pagination', component: PaginationDemo },
    ],
  },
];

export default function ComponentsPage() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Components
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Browse and preview all available UI components. Built with shadcn/ui
          and Radix UI primitives.
        </p>
      </div>

      <div className="flex gap-10">
        <aside className="hidden w-48 shrink-0 lg:block">
          <nav className="sticky top-20 space-y-1">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  activeSection === section.id
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {section.title}
                <span className="text-muted-foreground ml-2 text-xs">
                  {section.components.length}
                </span>
              </a>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 space-y-20">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  {section.title}
                </h2>
                <div className="bg-border mt-2 h-px" />
              </div>

              <div className="space-y-12">
                {section.components.map((comp) => (
                  <div key={comp.name}>
                    <h3 className="mb-4 text-lg font-semibold">{comp.name}</h3>
                    <div className="rounded-lg border p-6">
                      <comp.component />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

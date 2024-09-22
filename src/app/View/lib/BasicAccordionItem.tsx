import {Accordion, Checkbox, Square, Text, Theme, XStack} from 'tamagui';
import {Check, ChevronLeft} from '@tamagui/lucide-icons';
import {AccordionItemProps} from '@tamagui/accordion/types/Accordion';

type BasicAccordionItemProps = React.PropsWithChildren<
  AccordionItemProps & {
    checkable?: boolean;
    checked?: boolean;
    title: string;
  }
>;

export const BasicAccordionItem = ({title, checkable, checked, children, ...props}: BasicAccordionItemProps) => {
  return (
    <Accordion.Item {...props}>
      <Accordion.Trigger
        h={60}
        br={'$8'}
        bc={'$color1'}
        flexWrap={'nowrap'}
        fd={'row'}
        ai={'center'}
        p={0}
        pressStyle={{
          bg: '$backgroundPress',
        }}>
        {({open}: {open: boolean}) => (
          <>
            <XStack flexGrow={1} gap={'$space.2.5'} h={30} ai={'center'}>
              <Square flexGrow={0} h={'100%'} animation="quick" rotate={open ? '180deg' : '0deg'}>
                <ChevronLeft size="$1" />
              </Square>
              <Text fos={'$4'} fow={'$8'} lh={'$7'}>
                {title}
              </Text>

              {checkable && (
                <Checkbox size={'$3'} checked={checked} disabled bg={'transparent'} bc={0} mb={5}>
                  <Checkbox.Indicator>
                    <Theme name={'accent'}>
                      <Check size={'$1'} color={'$color7'} />
                    </Theme>
                  </Checkbox.Indicator>
                </Checkbox>
              )}
            </XStack>
          </>
        )}
      </Accordion.Trigger>
      <Accordion.HeightAnimator animation={'flip'}>
        <Accordion.Content p={0} animation={'flip'} enterStyle={{opacity: 0, y: 10, scale: 0.9}} exitStyle={{opacity: 0, y: -20, scale: 0.9}}>
          {children}
        </Accordion.Content>
      </Accordion.HeightAnimator>
    </Accordion.Item>
  );
};

// create a "playground" demo page that may set some defaults and allow story to access component controls
import React from 'react'
import clsx from 'clsx'
import {LayoutTemplate} from './LayoutBeta.stories'

export default {
  title: 'Components/Layout/Beta/PageLayout',
  excludeStories: ['PageLayoutTemplate'],
  argTypes: {

    // Debug

    _debug: {
      control: 'boolean',
      description: 'Show background colors in regions for debugging',
    },

    // Structure

    wrapperSizing: {
      options: ['fluid', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
        labels: ['fluid', 'md', 'lg', 'xl']
      },
      description: 'Define the maximum width of the component. `fluid` sets it to full-width. Other values center `Layout` horizontally. Refer to [container utilities](https://primer.style/css/utilities/grid#containers) for reference.',
      table: {
        category: 'Structure'
      }
    },

    outerSpacing: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets wrapper margins surrounding the component to distance itself from the viewport edges. `normal` sets the margin to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the margin at 16px.',
      table: {
        category: 'Structure'
      }
    },

    columnGap: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the gap between columns to distance them from each other. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px.',
      table: {
        category: 'Structure'
      }
    },
    rowGap: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the gap below the header and above the footer. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px.',
      table: {
        category: 'Structure'
      }
    },

    // Responsive

    responsiveVariant: {
      options: ['stackRegions', 'separateRegions'],
      control: {
        type: 'inline-radio'
      },
      description: '`responsiveVariant` defines how the layout component adapts to smaller viewports. `stackRegions` presents the content in a vertical flow, with `pane` and `content` vertically arranged. `separateRegions` presents `pane` and `content` as different pages on smaller viewports. Change the preview size from the toolbar to test it.',
      table: {
        category: 'Responsive'
      }
    },

    primaryRegion: {
      options: ['content', 'pane'],
      control: {
        type: 'inline-radio'
      },
      description: 'When `responsiveVariant` is set to `separateRegions`, defines which region appears first on small viewports. `content` is default.',
      table: {
        category: 'Responsive'
      }
    },

    // Pane

    panePosition: {
      options: ['start', 'end'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines the position of the pane. `start` renders the pane on the left, and `end` renders it on the right.',
      table: {
        category: 'Pane',
      }
    },
    panePositionNarrow: {
      options: ['inherit', 'start', 'end'],
      control: {
        type: 'inline-radio',
      },
      description: 'If `responsiveVariant` is set to `stackRegions`, defines the position of the pane in narrow viewports. `start` puts the pane above `content`, and `end` puts it below `content`. `inherit` uses the same value from `panePosition`.',
      table: {
        category: 'Pane'
      }
    },
    paneWidth: {
      options: ['default', 'narrow', 'wide'],
      control: {
      type: 'inline-radio'
      },
      description: 'Defines the width of the pane',
      table: {
        category: 'Pane'
      }
    },
    hasPaneDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a pane line divider.',
      table: {
        category: 'Pane'
      }
    },
    paneDividerNarrow: {
      options: ['inherit', 'none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description: 'Whether to show a divider between `pane` and `content` regions if `responsiveVariant` is set to `stackRegions`. `line` shows a single line. `filled` shows a thicker mobile-frienldy divider.',
      table: {
        category: 'Pane'
      }
    },

    // Content

    contentWidth: {
      options: ['fluid', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines the maximum width of the content region. `fluid` sets it to full-width. Other values follow container widths from `sm` to `xl`. With smaller widths, the content region will try to stay centered to the viewport area.',
      table: {
        category: 'Content'
      }
    },

    // Header

    hasHeader: {
      control: { type: 'boolean' },
      table: {
        category: 'Header'
      }
    },

    hasHeaderDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a header divider.',
      table: {
        category: 'Header'
      }
    },

    headerDividerNarrow: {
      options: ['inherit', 'none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines how the `header` divider should look on narrow viewports. `inherit` renders a `line` if `hasHeaderDivider` is true. `filled` shows a thicker mobile-friendly divider.',
      table: {
        category: 'Header'
      }
    },

    // Footer

    hasFooter: {
      control: { type: 'boolean' },
      table: {
        category: 'Footer'
      }
    },

    hasFooterDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a footer divider.',
      table: {
        category: 'Footer'
      }
    },

    footerDividerNarrow: {
      options: ['inherit', 'none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description: 'Whether to show a divider above the `footer` region on narrow viewports. `line` shows a single line. `filled` shows a thicker mobile-frienldy divider.',
      table: {
        category: 'Footer'
      }
    },

    // HTML

    headerChildren: {
      description: 'creates a slot for header children',
      table: {
        category: 'HTML'
      }
    },
    contentChildren: {
      description: 'creates a slot for content children',
      table: {
        category: 'HTML'
      }
    },
    paneChildren: {
      description: 'creates a slot for pane children',
      table: {
        category: 'HTML'
      }
    },
    footerChildren: {
      description: 'creates a slot for footer children',
      table: {
        category: 'HTML'
      }
    }
  },
};

export const PageLayoutTemplate = ({
  _debug,
  wrapperSizing,
  outerSpacing,
  columnGap,
  rowGap,
  responsiveVariant,
  primaryRegion,
  paneWidth,
  panePosition,
  panePositionNarrow,
  hasPaneDivider,
  paneDividerNarrow,
  contentWidth,
  hasHeader,
  hasHeaderDivider,
  headerDividerNarrow,
  hasFooter,
  hasFooterDivider,
  footerDividerNarrow,
  contentChildren,
  paneChildren,
  headerChildren,
  footerChildren
}) => {
  return (
    <>
      <LayoutTemplate
        _debug={_debug}
        wrapperSizing={wrapperSizing}
        outerSpacing={outerSpacing}
        innerSpacing='none'
        columnGap={columnGap}
        rowGap={rowGap}

        responsiveVariant={responsiveVariant}
        primaryRegion={primaryRegion}

        paneWidth={paneWidth}
        panePosition={panePosition}
        panePositionNarrow={panePositionNarrow}
        hasPaneDivider={hasPaneDivider}
        paneDividerNarrow={paneDividerNarrow}

        contentWidth={contentWidth}

        hasHeader={hasHeader}
        hasHeaderDivider={hasHeaderDivider}
        headerDividerNarrow={headerDividerNarrow}

        hasFooter={hasFooter}
        hasFooterDivider={hasFooterDivider}
        footerDividerNarrow={footerDividerNarrow}

        contentChildren={contentChildren}
        paneChildren={paneChildren}
        headerChildren={headerChildren}
        footerChildren={footerChildren}
      />
    </>
  );
};

export const Playground = PageLayoutTemplate.bind({});
Playground.storyName = 'Playground';
Playground.parameters = {
  layout: 'fullscreen',
};
Playground.args = {
  _debug: true,

  // Structure
  wrapperSizing: 'xl',
  outerSpacing: 'normal',
  columnGap: 'normal',
  rowGap: 'normal',

  // Responsive
  responsiveVariant: 'stackRegions',
  primaryRegion: 'content',

  // Pane
  panePosition: 'end',
  panePositionNarrow: 'inherit',
  paneWidth: 'default',
  hasPaneDivider: false,
  paneDividerNarrow: 'inherit',

  // Content
  contentWidth: 'fluid',

  // Header
  hasHeader: false,
  hasHeaderDivider: false,
  headerDividerNarrow: 'inherit',

  // Footer
  hasFooter: false,
  hasFooterDivider: false,
  footerDividerNarrow: 'inherit',

  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'

}

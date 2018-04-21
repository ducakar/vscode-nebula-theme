import { VscElement, ItalicsTheme } from '../models/index';

export const vscElements: VscElement[] = [
		{
			name: 'General',
			vscColors: [
				{ scope: 'foreground', color: '#fcf6ff' },
				{ scope: 'errorForeground', color: '#E34F8C' },
				{ scope: 'focusBorder', color: '#919CB9' },
				{ scope: 'descriptionForeground', color: '#919CB9' },
				{ scope: 'textLink.foreground', color: '#40afee' },
				{ scope: 'textLink.activeForeground', color: '#74D6E9' },
				{ scope: 'pickerGroup.foreground', color: '#363C4C' },
				{ scope: 'editorLineNumber.activeForeground', color: '#24E8D8' },
				{ scope: 'editorWhitespace.foreground', color: '#B2CFFB1A' },
				{ scope: 'editorIndentGuide.background', color: '#B2CFFB1A' },
				{ scope: 'editorRuler.foreground', color: '#C7ADFB2f' },
				{ scope: 'editorOverviewRuler.border', color: '#1F2330' },
				{ scope: 'progressBar.background', color: '#24E8D8'}
			]
		},
		{
			name: 'Badges & Buttons',
			vscColors: [
				{ scope: 'badge.foreground', color: '#f8f8f2' },
				{ scope: 'badge.background', color: '#E34F8C' },
				{ scope: 'button.background', color: '#E34F8C' },
				{ scope: 'button.hoverBackground', color: '#F661B1' }
			]
		},
		{
			name: 'Scroll Bar',
			vscColors: [
				{ scope: 'scrollbarSlider.background', color: '#42557B30' },
				{ scope: 'scrollbarSlider.hoverBackground', color: '#42557B50' },
				{ scope: 'scrollbarSlider.activeBackground', color: '#42557B90' },
				{ scope: 'scrollbar.shadow', color: '#0F1320' },
			]
		},
		{
			name: 'Editor',
			vscColors: [
				{ scope: 'editor.foreground', color: '#fcf6ff' },
				{ scope: 'editor.selectionForeground', color: '#25313e' },
				{ scope: 'editorCursor.foreground', color: '#97EE91' },
				{ scope: 'editorBracketMatch.background', color: '#2A2A46' },
				{ scope: 'editorBracketMatch.border', color: '#97EE91' },
				{ scope: 'editor.background', color: '#27273A' },
				{ scope: 'editorLineNumber.foreground', color: '#919CB9' },
				{ scope: 'editor.lineHighlightBackground', color: '#2A2A46' }
			]
		},
		{
			name: 'Window',
			vscColors: [
				{ scope: 'titleBar.activeBackground', color: '#1F2330' }
			]
		},
		{
			name: 'Extensions',
			vscColors: [
				{ scope: 'extensionButton.prominentBackground', color: '#97EE91' },
				{ scope: 'extensionButton.prominentForeground', color: '#0F1320' },
				{ scope: 'extensionButton.prominentHoverBackground', color: '#AFFA90' }
			]
		},
		{
			name: 'Editor Selection/Highlights',
			vscColors: [
				{ scope: 'selection.background', color: '#94cbf87a' },
				{ scope: 'editorOverviewRuler.selectionHighlightForeground', color: '#97EE91' },
				{ scope: 'editor.selectionHighlightBackground', color: '#42557B50' },
				{ scope: 'editor.selectionHighlightBorder', color: '#42557B' },
				{ scope: 'editor.wordHighlightBackground', color: '#42557B30' },
				{ scope: 'editor.selectionBackground', color: '#42557BC0' },
				{ scope: 'editor.wordHighlightBorder', color: '#00000000' },
				{ scope: 'editor.wordHighlightStrongBorder', color: '#00000000' },
				{ scope: 'editor.wordHighlightStrongBackground', color: '#42557B30' },
				{ scope: 'editor.rangeHighlightBackground', color: '#2A2A46' },
				{ scope: 'editor.findMatchBackground', color: '#C7ADFB90' },
				{ scope: 'editor.findMatchBorder', color: '#C7ADFB00' },
				{ scope: 'editor.findMatchHighlightBackground', color: '#C7ADFB30' },
				{ scope: 'editor.findRangeHighlightBackground', color: '#2A2A46' },
				{ scope: 'editor.findMatchHighlightBorder', color: '#C7ADFB50' }
			]
		},
		{
			name: 'tabs',
			vscColors: [
				{ scope: 'editorGroup.background', color: '#1F2330' },
				{ scope: 'editorGroupHeader.tabsBackground', color: '#1F2330' },
				{ scope: 'editorGroup.border', color: '#0F1320' },
				{ scope: 'editorGroup.dropBackground', color: '#363C4C5f' },
				{ scope: 'tab.activeBackground', color: '#27273A' },
				{ scope: 'tab.activeBorder', color: '#0000' },
				{ scope: 'tab.unfocusedActiveBorder', color: '#0000' },
				{ scope: 'tab.activeForeground', color: '#24E8D8' },
				{ scope: 'tab.unfocusedActiveForeground', color: '#47A9BC' },
				{ scope: 'tab.inactiveBackground', color: '#1F2330' },
				{ scope: 'tab.border', color: '#353551' },
				{ scope: 'tab.hoverBorder', color: '#24E8D8' },
				{ scope: 'tab.unfocusedHoverBorder', color: '#47A9BC' },
				{ scope: 'tab.unfocusedInactiveForeground', color: '#79839C' },
				{ scope: 'tab.inactiveForeground', color: '#919CB9' }
			]
		},
		{
			name: 'Terminal',
			vscColors: [
				{scope: 'terminal.background', color: '#27273A' },
				{ scope: 'terminalCursor.foreground', color: '#97EE91' },
				{ scope: 'terminalCursor.background', color: '#0F1320' },
				{ scope: 'terminal.selectionBackground', color: '#42557B5A' },
				{ scope: 'terminal.foreground', color: '#f6f0ff' },
				{ scope: 'terminal.ansiBlack', color: '#353551' },
				{ scope: 'terminal.ansiBlue', color: '#C7ADFB' },
				{ scope: 'terminal.ansiBrightBlack', color: '#919CB9' },
				{ scope: 'terminal.ansiBrightBlue', color: '#74D6E9' },
				{ scope: 'terminal.ansiBrightCyan', color: '#8DF9F9' },
				{ scope: 'terminal.ansiBrightGreen', color: '#AFFA90' },
				{ scope: 'terminal.ansiBrightMagenta', color: '#F799C7' },
				{ scope: 'terminal.ansiBrightRed', color: '#F36F98' },
				{ scope: 'terminal.ansiBrightWhite', color: '#D7D6DF' },
				{ scope: 'terminal.ansiBrightYellow', color: '#FAFAA0' },
				{ scope: 'terminal.ansiCyan', color: '#24E8D8' },
				{ scope: 'terminal.ansiGreen', color: '#97F36D' },
				{ scope: 'terminal.ansiMagenta', color: '#E752A1' },
				{ scope: 'terminal.ansiRed', color: '#E34F8C' },
				{ scope: 'terminal.ansiYellow', color: '#F8C275' },
				{ scope: 'terminal.ansiWhite', color: '#FBD3E1' },
				{ scope: 'activityBar.background', color: '#1F2330' }
			]
		},
		{
			name: 'Activity & Side Bar',
			vscColors: [
				{ scope: 'activityBar.foreground', color: '#f6f0ff' },
				{ scope: 'activityBar.border', color: '#0F1320' },
				{ scope: 'activityBar.dropBackground', color: '#0F1320' },
				{ scope: 'activityBarBadge.background', color: '#E34F8C' },
				{ scope: 'sideBarTitle.foreground', color: '#24E8D8' },
				{ scope: 'sideBar.border', color: '#0F1320' },
				{ scope: 'sideBar.foreground', color: '#919CB9' },
				{ scope: 'sideBar.background', color: '#27273A' },
				{ scope: 'sideBarSectionHeader.foreground', color: '#f6f0ff' },
				{ scope: 'sideBarSectionHeader.background', color: '#1F2330' },
				{ scope: 'sideBar.dropBackground', color: '#363C4C5f' }
			]
		},
		{
			name: 'Warnings & Errors',
			vscColors: [
				{ scope: 'editorMarkerNavigation.background', color: '#1F2330' },
				{ scope: 'editorError.foreground', color: '#F36F98' },
				{ scope: 'editorWarning.foreground', color: '#f2c88c' }
			]
		},
		{
			name: 'Widgets',
			vscColors: [
				{ scope: 'widget.shadow', color: '#0F1320' },
				{ scope: 'editorWidget.border', color: '#24E8D8' },
				{ scope: 'editorWidget.background', color: '#1F2330' },
				{ scope: 'editorSuggestWidget.border', color: '#24E8D8' },
				{ scope: 'editorSuggestWidget.background', color: '#1F2330' },
				{ scope: 'editorSuggestWidget.foreground', color: '#919CB9' },
				{ scope: 'editorSuggestWidget.selectedBackground', color: '#35355190' },
				{ scope: 'editorSuggestWidget.highlightForeground', color: '#fcf6ff' },
				{ scope: 'editorHoverWidget.background', color: '#1F2330' },
				{ scope: 'editorHoverWidget.border', color: '#24E8D8' }
			]
		},
		{
			name: 'Peek View',
			vscColors: [
				{ scope: 'peekView.border', color: '#24E8D8' },
				{ scope: 'peekViewTitle.background', color: '#1F2330' },
				{ scope: 'peekViewEditor.background', color: '#1F2330' },
				{ scope: 'peekViewResult.background', color: '#353551' },
				{ scope: 'peekViewResult.selectionBackground', color: '#35355190' },
				{ scope: 'peekViewResult.matchHighlightBackground', color: '#363C4C' },
				{ scope: 'peekViewEditor.matchHighlightBackground', color: '#363C4C' }
			]
		},
		{
			name: 'Debug',
			vscColors: [
				{ scope: 'debugToolBar.border', color: '#24E8D8' },
				{ scope: 'debugToolBar.background', color: '#1F2330' },
				{ scope: 'debugExceptionWidget.border', color: '#24E8D8' }
			]
		},
		{
			name: 'Lists',
			vscColors: [
				{ scope: 'list.inactiveSelectionForeground', color: '#fcf6ff' },
				{ scope: 'list.highlightForeground', color: '#f8f8f2' },
				{ scope: 'list.dropBackground', color: '#f6f0ff15' },
				{ scope: 'list.inactiveSelectionBackground', color: '#899BBF2c' },
				{ scope: 'list.activeSelectionBackground', color: '#899BBF3a' },
				{ scope: 'list.hoverBackground', color: '#919CB915' },
				{ scope: 'list.hoverForeground', color: '#f6f0ffea' },
				{ scope: 'list.focusBackground', color: '#899BBF30' },
				{ scope: 'list.focusForeground', color: '#f6f0ff' }
			]
		},
		{
			name: 'Panel',
			vscColors: [
				{ scope: 'panel.background', color: '#1F2330' },
				{ scope: 'panel.border', color: '#0F1320' },
				{ scope: 'panelTitle.inactiveForeground', color: '#919CB9' },
				{ scope: 'panelTitle.activeForeground', color: '#24E8D8' },
				{ scope: 'panelTitle.activeBorder', color: '#24E8D8' }
			]
		},
		{
			name: 'Status Bar',
			vscColors: [
				{ scope: 'statusBar.background', color: '#1F2330' },
				{ scope: 'statusBar.border', color: '#0F1320' },
				{ scope: 'statusBar.foreground', color: '#919CB9' },
				{ scope: 'statusBar.noFolderForeground', color: '#E34FBC' },
				{ scope: 'statusBar.noFolderBackground', color: '#27273A' },
				{ scope: 'statusBar.debuggingBackground', color: '#1F2330' },
				{ scope: 'statusBar.debuggingForeground', color: '#6EEEC4' }
			]
		},
		{
			name: 'Welcome',
			vscColors: [
				{ scope: 'welcomePage.buttonBackground', color: '#353551' },
				{ scope: 'welcomePage.buttonHoverBackground', color: '#919CB91c' },
				{ scope: 'textBlockQuote.border', color: '#E34F8C' },
				{ scope: 'textBlockQuote.background', color: '#919CB91c' },
				{ scope: 'textPreformat.foreground', color: '#24E8D8' },
				{ scope: 'textSeparator.foreground', color: '#919CB9' }
			]
		},
		{
			name: 'Notifications',
			vscColors: [
				{ scope: 'notifications.border', color: '#24E8D8' },
				{ scope: 'notificationCenter.border', color: '#24E8D8' },
				{ scope: 'notificationToast.border', color: '#24E8D8' },
				{ scope: 'notificationCenterHeader.background', color: '#1F2330' }
			]
		},
		{
			name: 'Dropdowns',
			vscColors: [
				{ scope: 'dropdown.listBackground', color: '#27273A' },
				{ scope: 'dropdown.border', color: '#FBD3E1' },
				{ scope: 'dropdown.background', color: '#f6f0ff' },
				{ scope: 'dropdown.foreground', color: '#353551' }
			]
		},
		{
			name: 'Input',
			vscColors: [
				{ scope: 'input.border', color: '#FBD3E1' },
				{ scope: 'input.background', color: '#D7D6DF' },
				{ scope: 'input.placeholderForeground', color: '#353551cc' },
				{ scope: 'input.foreground', color: '#1F2330' },
				{ scope: 'inputOption.activeBorder', color: '#363C4C' },
				{ scope: 'inputValidation.infoBorder', color: '#919CB9' },
				{ scope: 'inputValidation.infoBackground', color: '#1F2330' },
				{ scope: 'inputValidation.warningBorder', color: '#f2c88c' },
				{ scope: 'inputValidation.warningBackground', color: '#1F2330' },
				{ scope: 'inputValidation.errorBorder', color: '#E34F8C' },
				{ scope: 'inputValidation.errorBackground', color: '#1F2330' }
			]
		},
		{
			name: 'Diff',
			vscColors: [
				{ scope: 'diffEditor.insertedTextBackground', color: '#E34F8C25' },
				{ scope: 'diffEditor.removedTextBackground', color: '#6EEEC425' },
			]
		},
		{
			name: 'Git',
			vscColors: [
				{ scope: 'gitDecoration.modifiedResourceForeground', color: '#f2c88c' },
				{ scope: 'gitDecoration.deletedResourceForeground', color: '#E34F8C55' },
				{ scope: 'gitDecoration.untrackedResourceForeground', color: '#e7ADFBa0' },
				{ scope: 'gitDecoration.submoduleResourceForeground', color: '#C7ADFB5f' },
				{ scope: 'gitDecoration.conflictingResourceForeground', color: '#07ADFB' },
				{ scope: 'gitDecoration.ignoredResourceForeground', color: '#919CB9af' }
			]
		}
]
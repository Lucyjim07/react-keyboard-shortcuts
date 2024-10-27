const shortcuts = [
    {
        title: 'General',
        convinations: [
            {
                convination: ['Ctrl', 'Shift', 'P'],
                action: 'Show Command Palette',
            },
            {
                convination: ['Ctrl', 'P'],
                action: 'Quick Open, Go to File…',
            },
            {
                convination: ['Ctrl', 'Shift', 'N'],
                action: 'New window/instance',
            },
            {
                convination: ['Ctrl', 'Shift', 'W'],
                action: 'Close window/instance',
            },
            {
                convination: ['Ctrl', ','],
                action: 'User Settings',
            },
            {
                convination: ['Ctrl', 'K', 'Ctrl', 'S'],
                action: 'Keyboard Shortcuts',
            },
        ],
    },
    {
        title: 'Basic Editing',
        convinations: [
            {
                convination: ['Ctrl', 'X'],
                action: 'Cut line (empty selection)',
            },
            {
                convination: ['Ctrl', 'C'],
                action: 'Copy line (empty selection)',
            },
            {
                convination: ['Alt', 'Up / Down'],
                action: 'Move line up / down',
            },
            {
                convination: ['Shift', 'Alt', 'Up / Down'],
                action: 'Copy line up/down',
            }
        ],
    }
];

export default shortcuts;
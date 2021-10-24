const SequenceModel = (keyName,actionType = "KeyPress") => `
<Action_Sequence name="${keyName}" type="Action_Sequence" comment="" random="False">
   <Action type="${actionType}" value="${keyName}" />
</Action_Sequence>
`;

const TriggerModel = (Name,KeyName) => `
<Trigger name="${Name}" value="${Name}" type="Phrase" comment="">
   <Trigger_Event name="${KeyName}" type="Action_Sequence" value="" comment="" />
</Trigger>
`

let key1 = ['Escape','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'];
let key2 = ['Oemtilde','D1','D2','D3','D4','D5','D6','D7','D8','D9','D0','OemMinus','Oemplus','Back'];
let key3 = ['Tab','Q','W','E','R','T','Y','U','I','O','P'];
let key4 = ['Capital','A','S','D','F','G','H','J','K','L','Return'];
let key5 = ['ShiftKey','Z','X','C','V','B','N','M'];
let key6 = ['CtrlKey','AltKey','Space','Up','Down','Left','Right'];
let key7 = ['NumPad0','NumPad1','NumPad2','NumPad3','NumPad4','NumPad5','NumPad6','NumPad7','NumPad8','NumPad9','Delete'];
let key8 = ['NumLock','Divide','Multiply','Subtract','Add'];

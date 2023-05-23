export interface Icon {
  style: string;
  name: string;
  path: string;
}

export const activity: Icon = {
  style: 'line',
  name: 'activity',
  path: '    <polyline points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128" fill="none" stroke="current"              stroke-linecap="round" stroke-linejoin="round" ></polyline>'
};
export const arrowcounterclockwise: Icon = {
  style: 'line',
  name: 'arrow-counter-clockwise',
  path: '<path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path>'
};
export const arrowleft: Icon = {
  style: 'line',
  name: 'arrow-left',
  path: '    <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <polyline points="112 56 40 128 112 200" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>'
};
export const arrowright: Icon = {
  style: 'line',
  name: 'arrow-right',
  path: '    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <polyline points="144 56 216 128 144 200" fill="none" stroke="current" stroke-linecap="round"              stroke-linejoin="round" ></polyline>'
};
export const arrowsin: Icon = {
  style: 'line',
  name: 'arrows-in',
  path: '<path d="M144,104V64a8,8,0,0,1,16,0V84.69l42.34-42.35a8,8,0,0,1,11.32,11.32L171.31,96H192a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0,0,16H84.69L42.34,202.34a8,8,0,0,0,11.32,11.32L96,171.31V192a8,8,0,0,0,16,0V152A8,8,0,0,0,104,144Zm67.31,16H192a8,8,0,0,0,0-16H152a8,8,0,0,0-8,8v40a8,8,0,0,0,16,0V171.31l42.34,42.35a8,8,0,0,0,11.32-11.32ZM104,56a8,8,0,0,0-8,8V84.69L53.66,42.34A8,8,0,0,0,42.34,53.66L84.69,96H64a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,104,56Z"></path>'
};
export const at: Icon = {
  style: 'line',
  name: 'at',
  path: '    <circle cx="128.00293" cy="127.99512" r="40" fill="none" stroke="current" stroke-linecap="round"            stroke-linejoin="round" ></circle>    <path d="M181.08446,207.99724a96.00809,96.00809,0,1,1,42.91847-80.00212c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const brain: Icon = {
  style: 'line',
  name: 'brain',
  path: '<path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>'
};
export const broadcast: Icon = {
  style: 'line',
  name: 'broadcast',
  path: '<path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z"></path>'
};
export const cards: Icon = {
  style: 'line',
  name: 'cards',
  path: '<path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"></path>'
};
export const caretdoubleleft: Icon = {
  style: 'line',
  name: 'caret-double-left',
  path: '<path d="M205.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L131.31,128ZM51.31,128l74.35-74.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,0,11.32l80,80a8,8,0,0,0,11.32-11.32Z"></path>'
};
export const caretdown: Icon = {
  style: 'line',
  name: 'caret-down',
  path: '    <polyline points="208 96 128 176 48 96" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>'
};
export const caretleft: Icon = {
  style: 'line',
  name: 'caret-left',
  path: '    <polyline points="160 208 80 128 160 48" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>'
};
export const caretright: Icon = {
  style: 'line',
  name: 'caret-right',
  path: '    <polyline points="96 48 176 128 96 208" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>'
};
export const caretup: Icon = {
  style: 'line',
  name: 'caret-up',
  path: '    <polyline points="48 160 128 80 208 160" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>'
};
export const chartbar: Icon = {
  style: 'line',
  name: 'chart-bar',
  path: '    <polyline points="44 208 44 136 100 136" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>    <line x1="228" y1="208" x2="28" y2="208" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <polyline points="100 208 100 88 156 88" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>    <rect x="156" y="40" width="56" height="168"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>'
};
export const checkcircle: Icon = {
  style: 'line',
  name: 'check-circle',
  path: '    <polyline points="172 104 113.333 160 84 132" fill="none" stroke="current" stroke-linecap="round"              stroke-linejoin="round" ></polyline>    <circle cx="128" cy="128" r="96" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>'
};
export const circle: Icon = {
  style: 'line',
  name: 'circle',
  path: '    <circle cx="128" cy="128" r="96" fill="none" stroke="current" stroke-miterlimit="10" ></circle>'
};
export const cloudarrowup: Icon = {
  style: 'line',
  name: 'cloud-arrow-up',
  path: '    <path d="M96,207.98437H72A56,56,0,1,1,85.91924,97.7279" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <path d="M80,127.98437A80,80,0,1,1,224.00241,175.989" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <polyline points="118.059 161.926 152 127.984 185.941 161.926" fill="none" stroke="current" stroke-linecap="round"              stroke-linejoin="round" ></polyline>    <line x1="152" y1="207.98437" x2="152" y2="127.98437" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const computertower: Icon = {
  style: 'line',
  name: 'computer-tower',
  path: '<path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,72Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40Zm-16,0H64V216H192ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z"></path>'
};
export const cursor: Icon = {
  style: 'line',
  name: 'cursor',
  path: '<path d="M219.31,192a16,16,0,0,1,0,22.63l-4.68,4.68a16,16,0,0,1-22.63,0l-55.25-55.24-21.88,50.34A15.84,15.84,0,0,1,100.26,224l-.78,0a15.82,15.82,0,0,1-14.41-11L32.8,52.92A15.95,15.95,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-50.34,21.88Z"></path>'
};
export const database: Icon = {
  style: 'line',
  name: 'database',
  path: '<path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>'
};
export const desktoptower: Icon = {
  style: 'line',
  name: 'desktop-tower',
  path: '<path d="M24,96v72a8,8,0,0,0,8,8h80a8,8,0,0,1,0,16H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h80a8,8,0,0,1,0,16H32A8,8,0,0,0,24,96ZM208,64H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm0,32H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm40-48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM232,208V48H152V208h80Zm-40-40a12,12,0,1,0,12,12A12,12,0,0,0,192,168Z"></path>'
};
export const dotsthreeoutline: Icon = {
  style: 'line',
  name: 'dots-three-outline',
  path: '<path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path>'
};
export const dotsthreevertical: Icon = {
  style: 'line',
  name: 'dots-three-vertical',
  path: '    <circle cx="128" cy="128" r="12"></circle>    <circle cx="128" cy="64" r="12"></circle>    <circle cx="128" cy="192" r="12"></circle>'
};
export const downloadsimple: Icon = {
  style: 'line',
  name: 'download-simple',
  path: '    <polyline points="86 110.011 128 152 170 110.011" fill="none" stroke="current" stroke-linecap="round"              stroke-linejoin="round" ></polyline>    <line x1="128" y1="40" x2="128" y2="151.97057" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>'
};
export const drophalf: Icon = {
  style: 'line',
  name: 'drop-half',
  path: '<path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM200,144a70.57,70.57,0,0,1-.46,8H136V136h63.64Q200,140,200,144ZM183.39,88H136V72h36.89A175.85,175.85,0,0,1,183.39,88ZM136,200h37.19A71.67,71.67,0,0,1,136,215.54Zm0-16V168h59.87a72,72,0,0,1-8,16Zm0-64V104h55.39a116.84,116.84,0,0,1,5.45,16Zm23.89-64H136V32.6A257.22,257.22,0,0,1,159.89,56ZM56,144c0-50,42.26-92.71,64-111.4V215.54A72.08,72.08,0,0,1,56,144Z"></path>'
};
export const equalizer: Icon = {
  style: 'line',
  name: 'equalizer',
  path: '<path d="M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>'
};
export const eraser: Icon = {
  style: 'line',
  name: 'eraser',
  path: '    <line x1="91.55018" y1="99.54921" x2="159.43243" y2="167.43146" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const eyeslash: Icon = {
  style: 'line',
  name: 'eye-slash',
  path: '    <line x1="48" y1="40.00122" x2="208" y2="216.00122" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M154.9071,157.599a40.00028,40.00028,0,0,1-53.8142-59.19562" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></path>    <path d="M73.99446,68.59479C33.22519,89.24034,16,128.00122,16,128.00122s32,71.99219,112,71.99219a118.0238,118.0238,0,0,0,53.99756-12.59461"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <path d="M208.60953,169.10059C230.41132,149.57342,240,128.00122,240,128.00122S208,55.99341,128,55.99341a125.31923,125.31923,0,0,0-20.68221,1.68414"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <path d="M135.52737,88.709a40.02411,40.02411,0,0,1,32.29785,35.52874" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const eye: Icon = {
  style: 'line',
  name: 'eye',
  path: '    <path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <circle cx="128" cy="128.00061" r="40" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>'
};
export const files: Icon = {
  style: 'line',
  name: 'files',
  path: '<path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path>'
};
export const filex: Icon = {
  style: 'line',
  name: 'filex',
  path: '    <path d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <polyline points="152 32 152 88 208.008 88" fill="none" stroke="current" stroke-linecap="round"              stroke-linejoin="round" ></polyline>    <line x1="104" y1="128" x2="152" y2="176" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="152" y1="128" x2="104" y2="176" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const floppydisk: Icon = {
  style: 'line',
  name: 'floppy-disk',
  path: '<path d="M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>'
};
export const foldernotch: Icon = {
  style: 'line',
  name: 'folder-notch',
  path: '<path d="M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,64H93.33l21.34,16L93.33,96H40ZM216,200H40V112H93.33a16.12,16.12,0,0,0,9.6-3.2L130.67,88H216Z"></path>'
};
export const framecorners: Icon = {
  style: 'line',
  name: 'frame-corners',
  path: '    <polyline points="160 80 192 80 192 112" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>    <polyline points="96 176 64 176 64 144" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>    <rect x="32" y="48" width="192" height="160" rx="8"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>'
};
export const handgrabbing: Icon = {
  style: 'line',
  name: 'hand-grabbing',
  path: '    <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const handpointing: Icon = {
  style: 'line',
  name: 'hand-pointing',
  path: '    <path d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <path d="M168,112V100a20,20,0,0,0-40,0v4" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>'
};
export const harddrive: Icon = {
  style: 'line',
  name: 'hard-drive',
  path: '<path d="M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z"></path>'
};
export const house: Icon = {
  style: 'line',
  name: 'house',
  path: '<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>'
};
export const images: Icon = {
  style: 'line',
  name: 'images',
  path: '<path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,56H216v62.75l-10.07-10.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L72,109.37ZM184,200H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V132l36-36,49.66,49.66a8,8,0,0,0,11.31,0L194.63,120,216,141.38V168ZM160,84a12,12,0,1,1,12,12A12,12,0,0,1,160,84Z"></path>'
};
export const info: Icon = {
  style: 'line',
  name: 'info',
  path: '    <g opacity="0.1"></g>    <circle cx="128" cy="128" r="96" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <polyline points="120 120 128 120 128 176 136 176" fill="none" stroke="current" stroke-linecap="round"              stroke-linejoin="round" >    </polyline>    <circle cx="126" cy="84" r="6" fill="current" stroke="current">    </circle>'
};
export const key: Icon = {
  style: 'line',
  name: 'key',
  path: '    <path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <circle cx="180" cy="76" r="4" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>'
};
export const layout: Icon = {
  style: 'line',
  name: 'layout',
  path: '<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>'
};
export const linesegment: Icon = {
  style: 'line',
  name: 'line-segment',
  path: '    <circle cx="40" cy="200" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="96" cy="96" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="160" cy="160" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="216" cy="56" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <line x1="84.61991" y1="117.13444" x2="51.37906" y2="178.86746" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="143.02941" y1="143.02941" x2="112.97057" y2="112.97057" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></line>    <line x1="204.62096" y1="77.1325" x2="171.37906" y2="138.86746" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const linesegments: Icon = {
  style: 'line',
  name: 'line-segments',
  path: '    <circle cx="40" cy="200" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="96" cy="96" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="160" cy="160" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="216" cy="56" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <line x1="84.6" y1="117.1" x2="51.4" y2="178.9" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="143" y1="143" x2="113" y2="113" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="204.6" y1="77.1" x2="171.4" y2="138.9" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const magnifyingglass: Icon = {
  style: 'line',
  name: 'magnifying-glass',
  path: '    <circle cx="116" cy="116" r="84" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <line x1="175.39356" y1="175.40039" x2="223.99414" y2="224.00098" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></line>'
};
export const minus: Icon = {
  style: 'line',
  name: 'minus',
  path: '    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>'
};
export const pennib: Icon = {
  style: 'line',
  name: 'pen-nib',
  path: '    <circle cx="116" cy="140" r="20" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <line x1="32.00586" y1="224.00342" x2="101.85786" y2="154.14214" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <path d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const pencilsimple: Icon = {
  style: 'line',
  name: 'pencil-simple',
  path: '    <path d="M96,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>'
};
export const pencil: Icon = {
  style: 'line',
  name: 'pencil',
  path: '    <path d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="95.48882" y1="215.48882" x2="40.5088" y2="160.5088" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const plugsconnected: Icon = {
  style: 'line',
  name: 'plugs-connected',
  path: '<path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.41,34.53a8,8,0,0,1,15.18-5.06l8,24a8,8,0,0,1-15.18,5.06Zm-64,58.94a8,8,0,0,1,10.12-5.06l24,8a8,8,0,0,1-5.06,15.18l-24-8A8,8,0,0,1,24.41,93.47Zm207.18,69.06a8,8,0,0,1-10.12,5.06l-24-8a8,8,0,0,1,5.06-15.18l24,8A8,8,0,0,1,231.59,162.53Zm-64,58.94a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06Z"></path>'
};
export const plugs: Icon = {
  style: 'line',
  name: 'plugs',
  path: '<path d="M149.66,138.34a8,8,0,0,0-11.32,0L120,156.69,99.31,136l18.35-18.34a8,8,0,0,0-11.32-11.32L88,124.69,69.66,106.34a8,8,0,0,0-11.32,11.32L64.69,124,41.37,147.31a32,32,0,0,0,0,45.26l5.38,5.37-28.41,28.4a8,8,0,0,0,11.32,11.32l28.4-28.41,5.37,5.38a32,32,0,0,0,45.26,0L132,191.31l6.34,6.35a8,8,0,0,0,11.32-11.32L131.31,168l18.35-18.34A8,8,0,0,0,149.66,138.34Zm-52.29,65a16,16,0,0,1-22.62,0L52.69,181.25a16,16,0,0,1,0-22.62L76,135.31,120.69,180Zm140.29-185a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Zm-34.35,79L180,120.69,135.31,76l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,203.31,97.37Z"></path>'
};
export const pluscircle: Icon = {
  style: 'line',
  name: 'plus-circle',
  path: '    <circle cx="128" cy="128" r="96" fill="none" stroke="current" stroke-miterlimit="10" ></circle>    <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>'
};
export const plus: Icon = {
  style: 'line',
  name: 'plus',
  path: '    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>'
};
export const polygonsegments: Icon = {
  style: 'line',
  name: 'polygon-segments',
  path: '    <circle cx="120" cy="48" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="40" cy="120" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="160" cy="208" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="208" cy="72" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <line x1="184.8" y1="65.7" x2="143.2" y2="54.3" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="102.2" y1="64.1" x2="57.8" y2="103.9" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="59.4" y1="134.2" x2="140.6" y2="193.8" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="168" y1="185.4" x2="200" y2="94.6" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const polygon: Icon = {
  style: 'line',
  name: 'polygon',
  path: '    <circle cx="120" cy="48" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="40" cy="120" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="160" cy="208" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <circle cx="208" cy="72" r="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"            ></circle>    <line x1="184.84844" y1="65.68594" x2="143.15155" y2="54.31406" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="102.16099" y1="64.05511" x2="57.83902" y2="103.94489" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="59.35636" y1="134.19466" x2="140.64365" y2="193.80534" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="167.98938" y1="185.36342" x2="200.01089" y2="94.6358" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const pulse: Icon = {
  style: 'line',
  name: 'pulse',
  path: '<path d="M240,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.71A8,8,0,0,1,200,120h32A8,8,0,0,1,240,128Z"></path>'
};
export const pushpin: Icon = {
  style: 'line',
  name: 'push-pin',
  path: '    <line x1="88" y1="168" x2="48" y2="208" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <path d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const rectangle: Icon = {
  style: 'line',
  name: 'rectangle',
  path: '    <rect x="32" y="48" width="192" height="160" rx="8"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>'
};
export const selectionall: Icon = {
  style: 'line',
  name: 'selection-all',
  path: '    <line x1="144" y1="40" x2="112" y2="40" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M184,40h24a8,8,0,0,1,8,8V71.99963" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <line x1="216" y1="143.99963" x2="216" y2="111.99963" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M184,216h24a8,8,0,0,0,8-8V183.99963" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <path d="M72,40H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <rect x="80" y="80" width="96" height="96"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>'
};
export const signout: Icon = {
  style: 'line',
  name: 'sign-out',
  path: '<path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path>'
};
export const smileysad: Icon = {
  style: 'line',
  name: 'smiley-sad',
  path: '    <circle cx="128" cy="128" r="96" fill="none" stroke="current" stroke-miterlimit="10" ></circle>    <circle cx="92" cy="108" r="12"></circle>    <circle cx="164" cy="108" r="12"></circle>    <circle cx="92" cy="108" r="12"></circle>    <circle cx="164" cy="108" r="12"></circle>    <path d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>'
};
export const spinner: Icon = {
  style: 'line',
  name: 'spinner',
  path: '    <line x1="128" y1="32" x2="128" y2="64" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="195.88225" y1="60.11775" x2="173.25483" y2="82.74517" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="224" y1="128" x2="192" y2="128" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="195.88225" y1="195.88225" x2="173.25483" y2="173.25483" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></line>    <line x1="128" y1="224" x2="128" y2="192" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="60.11775" y1="195.88225" x2="82.74517" y2="173.25483" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="32" y1="128" x2="64" y2="128" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="60.11775" y1="60.11775" x2="82.74517" y2="82.74517" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>'
};
export const squaresfour: Icon = {
  style: 'line',
  name: 'squares-four',
  path: '    <rect x="48" y="48" width="64" height="64"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>    <rect x="144" y="48" width="64" height="64"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>    <rect x="48" y="144" width="64" height="64"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>    <rect x="144" y="144" width="64" height="64"  stroke="current" stroke-linecap="round"          stroke-linejoin="round" fill="none"></rect>'
};
export const stack: Icon = {
  style: 'line',
  name: 'stack',
  path: '<path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>'
};
export const tag: Icon = {
  style: 'line',
  name: 'tag',
  path: '    <path d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"          fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ></path>    <circle cx="84" cy="84" r="12"></circle>'
};
export const toolbox: Icon = {
  style: 'line',
  name: 'toolbox',
  path: '<path d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM224,80v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32V80Zm0,112H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z"></path>'
};
export const trash: Icon = {
  style: 'line',
  name: 'trash',
  path: '    <line x1="215.99609" y1="56" x2="39.99609" y2="56.00005" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>    <path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></path>'
};
export const treestructure: Icon = {
  style: 'line',
  name: 'tree-structure',
  path: '<path d="M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z"></path>'
};
export const triangle: Icon = {
  style: 'line',
  name: 'triangle',
  path: '    <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const upload: Icon = {
  style: 'line',
  name: 'upload',
  path: '    <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none"          stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <polyline points="80 72 128 24 176 72" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"              ></polyline>    <circle cx="188" cy="168" r="12"></circle>'
};
export const usercircle: Icon = {
  style: 'line',
  name: 'user-circle',
  path: '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>'
};
export const user: Icon = {
  style: 'line',
  name: 'user',
  path: '    <circle cx="128" cy="96" r="64" fill="none" stroke="current" stroke-miterlimit="10" ></circle>    <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="current"          stroke-linecap="round" stroke-linejoin="round" ></path>'
};
export const users: Icon = {
  style: 'line',
  name: 'users',
  path: '<path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>'
};
export const warning: Icon = {
  style: 'line',
  name: 'warning',
  path: '    <line x1="128" y1="104" x2="128" y2="144" fill="none" stroke="current" stroke-linecap="round"          stroke-linejoin="round" ></line>    <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z"          fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round" ></path>    <circle cx="128" cy="180" r="6"></circle>'
};
export const xcircle: Icon = {
  style: 'line',
  name: 'x-circle',
  path: '    <circle cx="128" cy="128" r="96" fill="none" stroke="current" stroke-miterlimit="10" ></circle>    <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>'
};
export const x: Icon = {
  style: 'line',
  name: 'x',
  path: '    <line x1="200" y1="56" x2="56" y2="200" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>    <line x1="200" y1="200" x2="56" y2="56" stroke="current" stroke-linecap="round" stroke-linejoin="round"          ></line>'
};

export type IconNames =
  | 'activity'
  | 'arrow-counter-clockwise'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrows-in'
  | 'at'
  | 'brain'
  | 'broadcast'
  | 'cards'
  | 'caret-double-left'
  | 'caret-down'
  | 'caret-left'
  | 'caret-right'
  | 'caret-up'
  | 'chart-bar'
  | 'check-circle'
  | 'circle'
  | 'cloud-arrow-up'
  | 'computer-tower'
  | 'cursor'
  | 'database'
  | 'desktop-tower'
  | 'dots-three-outline'
  | 'dots-three-vertical'
  | 'download-simple'
  | 'drop-half'
  | 'equalizer'
  | 'eraser'
  | 'eye-slash'
  | 'eye'
  | 'files'
  | 'filex'
  | 'floppy-disk'
  | 'folder-notch'
  | 'frame-corners'
  | 'hand-grabbing'
  | 'hand-pointing'
  | 'hard-drive'
  | 'hard-drives'
  | 'house'
  | 'images'
  | 'info'
  | 'key'
  | 'layout'
  | 'line-segment'
  | 'line-segments'
  | 'magnifying-glass'
  | 'minus'
  | 'pen-nib'
  | 'pencil-simple'
  | 'pencil'
  | 'plugs-connected'
  | 'plugs'
  | 'plus-circle'
  | 'plus'
  | 'polygon-segments'
  | 'polygon'
  | 'pulse'
  | 'push-pin'
  | 'rectangle'
  | 'selection-all'
  | 'sign-out'
  | 'smiley-sad'
  | 'spinner'
  | 'squares-four'
  | 'stack'
  | 'tag'
  | 'toolbox'
  | 'trash'
  | 'tree-structure'
  | 'triangle'
  | 'upload'
  | 'user-circle'
  | 'user'
  | 'users'
  | 'warning'
  | 'x-circle'
  | 'x';

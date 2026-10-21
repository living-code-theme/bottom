import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { resolveAll } from '../scripts/palette.mjs';
import { keys, hexColors, assertContrast } from './helpers.mjs';
const fixture = JSON.parse(await readFile(new URL('./fixtures/upstream.json', import.meta.url)));
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
import * as TOML from 'smol-toml';

for (const f of resolveAll()) test(f.name + ': bottom TOML section/field contract', async () => {
  const t = TOML.parse(await read('themes/' + f.slug + '.toml'));
  keys(t, ['styles']); keys(t.styles, ['theme', ...Object.keys(fixture.sections)]);
  assert.equal(t.styles.theme, f.light ? 'default-light' : 'default');
  for (const [name, fields] of Object.entries(fixture.sections)) keys(t.styles[name], fields);
  hexColors(Object.fromEntries(Object.entries(t.styles).filter(([key]) => key !== 'theme')));
  const w = t.styles.widgets;
  assert.equal(w.text.color, f.r('fg')); assert.equal(w.bg_color, f.r('bg'));
  assert.equal(t.styles.network.rx_color, f.r('info')); assert.equal(t.styles.battery.low_battery_color, f.r('error'));
  assert.equal(t.styles.cpu.cpu_core_colors.length, 8);
  assertContrast(w.text.color, w.bg_color); assertContrast(w.selected_text.color, w.selected_text.bg_color);
});

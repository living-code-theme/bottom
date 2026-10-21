// bottom's native [styles] configuration; no unrelated widget or process settings.
const table = (name, values) => `[${name}]\n${Object.entries(values).map(([key, value]) => `${key} = ${typeof value === 'string' ? JSON.stringify(value) : Array.isArray(value) ? JSON.stringify(value) : '{ ' + Object.entries(value).map(([k, v]) => `${k} = ${JSON.stringify(v)}`).join(', ') + ' }'}`).join('\n')}\n`;
export function generate(flavors) {
  return flavors.map(f => {
    const series = ['accent', 'warning', 'info', 'success', 'decorator', 'link', 'number', 'error'].map(role => f.r(role));
    const content = [
      table('styles', { theme: f.light ? 'default-light' : 'default' }),
      table('styles.cpu', { all_entry_color: f.r('accent'), avg_entry_color: f.r('warning'), cpu_core_colors: series }),
      table('styles.temp_graph', { temp_graph_color_styles: series }),
      table('styles.memory', { ram_color: f.r('decorator'), cache_color: f.r('hint'), swap_color: f.r('warning'), arc_color: f.r('link'), gpu_colors: series }),
      table('styles.network', { rx_color: f.r('info'), tx_color: f.r('success'), rx_total_color: f.r('link'), tx_total_color: f.r('hint') }),
      table('styles.battery', { high_battery_color: f.r('success'), medium_battery_color: f.r('warning'), low_battery_color: f.r('error') }),
      table('styles.tables', { headers: { color: f.r('heading') } }),
      table('styles.graphs', { graph_color: f.r('border'), legend_text: { color: f.r('fgMuted') } }),
      table('styles.widgets', { border_color: f.r('border'), selected_border_color: f.r('borderActive'), widget_title: { color: f.r('heading') },
        text: { color: f.r('fg') }, selected_text: { color: f.r('fg'), bg_color: f.r('selection') }, disabled_text: { color: f.r('fgSubtle') }, bg_color: f.r('bg') }),
    ].join('\n');
    return { path: `themes/${f.slug}.toml`, content };
  });
}

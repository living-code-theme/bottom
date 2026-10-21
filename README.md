<!-- living-code-readme:1 -->
# 📊 Living Code for bottom

**Calm slate. Living color.** Living Code for bottom: native TOML styles for CPU, memory, network, batteries, graphs, tables and selected widgets.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
git clone https://github.com/living-code-theme/bottom.git
cd bottom
```

```sh
btm --config "$PWD/themes/living-code-night.toml"
```

To retain your existing monitor layout and process settings, merge the selected file’s `[styles]` tables into your normal `bottom.toml` instead of replacing the whole file.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

```sh
btm --config "$PWD/themes/living-code-night.toml"
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

```sh
btm --config "$PWD/themes/living-code-frost.toml"
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

```sh
btm --config "$PWD/themes/living-code-paper.toml"
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

```sh
btm --config "$PWD/themes/living-code-signal.toml"
```

</details>

## Configuration

The file contains only `[styles]` and its child tables. Remove existing duplicates before merging. Do not pass `--color` when testing the custom palette: a built-in-theme command-line override takes precedence. CPU, temperature and GPU series use a consistent set of Living Code semantic hues. Widget text and selected text use explicit foreground/background pairs.

## Compatibility

Targets bottom’s current `[styles]` format, verified against its complete upstream valid-style fixture. Older releases using different styling keys are not claimed. Truecolor is recommended. Tests parse TOML, check section/field names against the fixture and verify foreground/selection contrast; they do not claim a real application screenshot.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/bottom/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque

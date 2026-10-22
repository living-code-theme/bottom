"""Capture bottom's actual monitor with its native styles loaded."""
import time


def prepare(c):
    return ['btm', '--config', c.root / 'themes' / (c.slug + '.toml')]


def drive(c):
    c.wait_text(r'CPU|Processes')
    time.sleep(2)  # Give the real monitor enough samples to populate its graphs.

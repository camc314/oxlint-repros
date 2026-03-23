import { readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const x = readFileSync;
const y = tmpdir;
const z = join;
const u = fileURLToPath;

void x;
void y;
void z;
void u;

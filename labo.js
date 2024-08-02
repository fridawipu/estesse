return def.array && !isSignal(value) ? value.map(v => parameterValue(def, v, scope)) : parameterValue(def, value, scope);

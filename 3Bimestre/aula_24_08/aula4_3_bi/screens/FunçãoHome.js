export function criarExperiencia(
  sentimento,
  palavra,
  setExperiencia,
  setCorExperiencia
) {

  if (
    sentimento.trim() === '' ||
    palavra.trim() === ''
  ) {

    setExperiencia(
      'Preencha os dois campos para criar sua experiência.'
    );

    setCorExperiencia('#101010');

    return;
  }


  const sentimentoNormalizado =
    sentimento.trim().toLowerCase();


  let atmosfera;
  let descricao;
  let cor;


  switch (sentimentoNormalizado) {

    case 'tranquilo':
    case 'tranquila':
    case 'calmo':
    case 'calma':

      atmosfera = '🌙 Atmosfera contemplativa';

      descricao =
        'Uma viagem tranquila por pensamentos e memórias.';

      cor = '#102A43';

      break;


    case 'triste':
    case 'melancólico':
    case 'melancólica':
    case 'melancolico':
    case 'melancolica':

      atmosfera = '🌧️ Atmosfera melancólica';

      descricao =
        'Um momento introspectivo para observar seus pensamentos.';

      cor = '#241B3A';

      break;


    case 'feliz':
    case 'alegre':
    case 'animado':
    case 'animada':

      atmosfera = '☀️ Atmosfera leve';

      descricao =
        'Uma experiência cheia de energia, liberdade e boas sensações.';

      cor = '#4A3B16';

      break;


    case 'confuso':
    case 'confusa':

      atmosfera = '🌀 Atmosfera psicodélica';

      descricao =
        'Uma viagem por ideias diferentes, pensamentos e possibilidades.';

      cor = '#32145F';

      break;


    case 'cansado':
    case 'cansada':

      atmosfera = '🌌 Atmosfera introspectiva';

      descricao =
        'Um momento para desacelerar e observar o mundo ao seu redor.';

      cor = '#101D35';

      break;


    case 'nervoso':
    case 'nervosa':
    case 'ansioso':
    case 'ansiosa':

      atmosfera = '⚡ Atmosfera intensa';

      descricao =
        'Uma experiência marcada por pensamentos rápidos e muita intensidade.';

      cor = '#4A1515';

      break;


    default:

      atmosfera = '🌈 Atmosfera desconhecida';

      descricao =
        'Uma experiência única, criada a partir do seu momento atual.';

      cor = '#252525';

      break;
  }


  const resultado =
    `${atmosfera}\n\n` +
    `${descricao}\n\n` +
    `Sua palavra: "${palavra.trim()}"`;


  setExperiencia(resultado);

  setCorExperiencia(cor);
}
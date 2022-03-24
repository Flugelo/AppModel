import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pages/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'comando',
    loadChildren: () => import('./pages/comando/comando.module').then( m => m.ComandoPageModule)
  },
  {
    path: 'administradores',
    loadChildren: () => import('./pages/administradores/administradores.module').then( m => m.AdministradoresPageModule)
  },
  {
    path: 'discord',
    loadChildren: () => import('./pages/discord/discord.module').then( m => m.DiscordPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./pages/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
